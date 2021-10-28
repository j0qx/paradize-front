/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './app/schemas/tomtomApi.js'
const app = express.default();

app.use('/graphiql', graphqlHTTP({
  graphiql:true,
  schema
}))

const port = Number(process.env.port) || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/graphiql`);
});
server.on('error', console.error);
