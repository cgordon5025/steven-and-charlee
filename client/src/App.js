import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, HttpLink } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
//import pages 
import Home from './pages/Home';
import MessagePage from './pages/MessagePage';
import NewMessage from './components/NewMessage';
import Footer from './components/Footer';
import Header from './components/Header';
import Registry from './pages/Registry';
import Travel from './pages/Travel';
// const authLink = setContext((_, { header }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// })

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  // uri: '/graphql',
  link: httpLink,
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Messages' element={<MessagePage />} />
        <Route path='/NewMessage' element={<NewMessage />} />
        <Route path='/Travel' element={<Travel />} />
        <Route path='/Registry' element={<Registry />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
