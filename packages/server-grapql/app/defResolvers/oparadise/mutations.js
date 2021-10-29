/* eslint-disable import/prefer-default-export */
import client from '../../connectDb';

const addUser = async (args) => {
  // get names of table's columns
  const keys = Object.keys(args);
  // get value from user to put inside table's columns
  const values = Object.values(args);
  // create a string like $1,$2,$3,... to put inside the text query
  // (its link syntax from sql to replace this by values)
  const indexs = [...Array(values.length).keys()].map((i) => `$${i + 1}`).join(',');

  // create query before to convert protect from sql injections
  const query = {
    text: `INSERT INTO user_account(${keys}) VALUES(${indexs})`,
    values: values,
  };
  const response = await client.query(query);
  // TODO: response isn't right , we need de to requery database and get result from insert
  console.log(response);
  return response.rows;
};

export {
  addUser,
};
