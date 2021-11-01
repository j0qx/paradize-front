import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typesDefs';
import resolvers from './resolvers';
import TomtomApi from './datasources/TomtomApi';
import oparadiseDb from './datasources/oparadiseDb';

const PORT = 3333;

// anomyme function executed when everything is loaded
(async () => {
  const app = express();
  app.use(cors());
  app.get('/', (req, res) => {
    res.send('welcome on graphql server');
  });

  // we create the ApolloServer class with everything we need inside
  const apolloServer = new ApolloServer({
    // describe all types inside graphqlApi
    // shortcut syntax = typeDefs: typeDefs
    typeDefs,
    // describe actions to db or externals api
    resolvers,
    context: () => ({
      // with context each resolver can access to the client connected to the db
      client: oparadiseDb,
    }),
    dataSources: () => ({
      // datasources is very useful to use lots of external api
      // datasource will be available inside the context from resolver
      tomtomApi: new TomtomApi(),
    }),
  });
  // execute launcher from ApolloServers'class
  await apolloServer.start();
  // apollo will be executed for each server's request
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('server listening on : ', PORT);
  });
})();
