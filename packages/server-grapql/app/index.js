import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './typesDefs';
import resolvers from './resolvers';
import TomtomApi from './datasources/TomtomApi';
import oparadiseDb from './datasources/oparadiseDb';

const PORT = 3333;

(async () => {
  const app = express();
  app.use(cors());
  app.get('/', (req, res) => {
    res.send('welcome on graphql server');
  });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      client: oparadiseDb,
    }),
    dataSources: () => ({
      tomtomApi: new TomtomApi(),
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('server listening on : ', PORT);
  });
})();
