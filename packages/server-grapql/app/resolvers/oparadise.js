const queryOparadise = {
  users: async (_, __, { client }) => {
    const response = await client.query('SELECT * FROM "user_account"');
    return response.rows;
  },
  user: async (_, { email }, { client }) => {
    const query = {
      text: 'SELECT * FROM "user_account" WHERE mail=$1',
      values: [email],
    };
    const response = await client.query(query);
    return response.rows;
  },
};

const mutationOparadise = {
  registerUser: async (_, args, { client }) => {
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
    return response.rows;
  },
};
export {
  queryOparadise,
  mutationOparadise,
};
