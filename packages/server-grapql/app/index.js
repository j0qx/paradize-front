import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schemas/Oparadise_schema';

const server = express();

const PORT = 3333;

server.use(cors());

server.use('/graphiql', graphqlHTTP({
  graphiql: true,
  schema,
}));

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on : ', PORT);
});
