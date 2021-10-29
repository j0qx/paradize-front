/* eslint-disable import/prefer-default-export */
import client from '../../connectDb';

const addUser = async (args) => {
  const keys = Object.keys(args);
  const values = Object.values(args);
  const indexs = [...Array(values.length).keys()].map((i) => `$${i + 1}`).join(',');
  const query = {
    text: `INSERT INTO user_account(${keys}) VALUES(${indexs})`,
    values: values,
  };
  const response = await client.query(query);
  console.log(response);
  return response.rows;
};

export {
  addUser,
};
