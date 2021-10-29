import express from 'express';
import client from '../connectDb';

const router = express.Router();

router.get('/user', (req, res) => {
  client.query('SELECT * FROM "user_account"', (err, result) => {
    res.send(result);
  });
});

export default router;
