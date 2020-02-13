import React from 'react';
import { Button } from 'antd';
import './App.css';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import IndexShipments from './modules/shipments/index';

//** Configuracion del cliente Apollo al endpoint de GraphQL */
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <IndexShipments />
    </ApolloProvider>
  );
}

export { App };
