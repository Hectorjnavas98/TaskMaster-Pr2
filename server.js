const { connectToDatabase } = require('./app/config/database');
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose')

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hola desde Apollo Server',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  await connectToDatabase();
  await server.start();
  server.applyMiddleware({ app });
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Servidor Express con Apollo Server iniciado en el puerto ${PORT}`);
  });
}

startApolloServer();

//En el terminal: escribir "node server.js" para iniciar el servidor2
//Una vez iniciado el servidor podemos acceder a él desde:
            //http://localhost:4000/graphql