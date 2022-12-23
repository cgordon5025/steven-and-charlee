import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
//import pages 

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
  uri: '/graphql',
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <h2> Hello</h2>
      <Routes>
        <Route />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
