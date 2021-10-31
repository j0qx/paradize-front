/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-server-express';
// TODO : type from  base seems strange , check it and ajust this file

const user = gql`
  type User {
    id: String!,
    first_name: String!,
    last_name: String!,
    civility: String,
    mail: String!,
    password: String!,
    address: String,
    city_code: String,
    city: String,
    number_phone: String,
  }

  type SucessMessage {
    message: String!
  }
  extend type Query {
    users:[User]!
    user(email:String!):[User]!
  }

  extend type Mutation {
    registerUser(
      first_name: String!,
      last_name: String!,
      civility: String,
      mail: String!,
      password: String!,
      address: String,
      city_code: String,
      city: String,
      number_phone: String,
    ): User!
  }
`;
export default user;
