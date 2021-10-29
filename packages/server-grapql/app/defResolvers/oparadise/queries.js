/* eslint-disable import/prefer-default-export */
import client from '../../connectDb';

const getUsers = async () => {
  const response = await client.query('SELECT * FROM "user_account"');
  return response.rows;
};

export {
  getUsers,
};
