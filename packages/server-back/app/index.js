import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';

const server = express();

const PORT = 3000;

server.use(cors());

server.use('/api', userRoutes);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on : ', PORT);
});
