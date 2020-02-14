import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Import } from './pages/Import';
import './App.css';
import { client } from './index';

function App() {
  return (
    <ApolloProvider client={client}>
      <Import />
    </ApolloProvider>
  );
}

export default App;
