import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, HttpLink } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import PartyContext from './utils/PartyContext';
import React, { useState, useReducer } from 'react';
import { reducer } from './utils/reducers';
import { SAVE_GUEST } from './utils/action';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//import pages 
import Home from './pages/Home';

import Footer from './components/Footer';
import Header from './components/Header';
import Registry from './pages/Registry';
import Travel from './pages/Travel';
import BridalParty from './pages/BridalParty';
import AllGuests from './pages/AllGuests';
import RSVP from './pages/RSVP';
const registries = [
  {
    store: "Target",
    website: "Target.com",
    imgURL: "https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w"
  },
  {
    store: "Target",
    website: "Target.com",
    imgURL: "https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w"
  }
]

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const styles = {
  banner: {
    display: "flex",
    backgroundImage: `url(./images/base2.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: "no repeat",
    backgroundPosition: "center",
    justifyContent: "center"
  }
}

function App() {
  const partyState = JSON.parse(localStorage.getItem("PartyAuth"))
  const guestState = JSON.parse(localStorage.getItem("GuestAuth"))
  const [party, setParty] = useReducer(reducer, partyState)
  const [guest, setGuest] = useReducer(reducer, guestState)

  const [guestModal, setGuestModal] = useState(true);
  const [guestPass, setGuestPass] = useState();
  const [guestInput, setGuestInput] = useState('');
  const [guestResp, setGuestResp] = useState(false);

  const correctPass = () => {
    const payload = {
      invite: true
    }
    setGuest({
      type: SAVE_GUEST,
      payload: payload
    })
    setGuestPass(true)
    setGuestResp(false)
    setGuestModal(false)
    localStorage.setItem("GuestAuth", JSON.stringify(true))
  }
  const incorrectPass = () => {
    setGuestPass(false)
    setGuestResp(true)
    setGuestModal(true)
  }
  const closeGuestModal = () => {
    guestInput.password == "Steven&Charlee" ? (correctPass()) : (incorrectPass());
  }
  const changeMain = (event) => {
    const { name, value } = event.target
    setGuestInput({
      ...guestInput,
      [name]: value
    })
  }
  return (
    <ApolloProvider client={client}>
      <PartyContext.Provider value={{ party, setParty }}>
        <div className="banner">
          <Link to='/'>
            <img src='./images/base.png' alt='steven&charlee'>
            </img>
            <h1 style={{ color: "#53a0a5" }}>Steven & Charlee</h1>
          </Link>
        </div>
        <Header />
        {guest ? (
          <></>
        ) : (
          <Modal show={guestModal} onHide={closeGuestModal}>
            <Modal.Header>
              Please enter the password to gain access to this page
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: "Column", alignItems: "center" }}>
              <form>
                <input
                  className="form-input"
                  placeholder="Enter the password"
                  name="password"
                  type="password"
                  id="password-input"
                  onChange={changeMain}
                >
                </input>
              </form>
              {guestResp ? (
                <p style={{ marginTop: "3%" }}> You have entered the wrong password</p>
              ) : (
                <></>
              )
              }
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", flexDirection: "column" }}>
              < Button onClick={closeGuestModal}>Submit</Button>
            </Modal.Footer>
          </Modal>
        )}
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/Travel' element={<Travel />} />
          <Route path='/Registry' element={<Registry registries={registries} />} />
          <Route path='/Weddingparty' element={<BridalParty />} />
          <Route path='/AllGuests' element={<AllGuests />} />
          <Route path="RSVP" element={<RSVP />} />
        </Routes>
        <Footer />
      </PartyContext.Provider>
    </ApolloProvider >
  );
}
// do we want to do online RSVP for paper,paper would be easiest but might be a fun exercise
export default App;
