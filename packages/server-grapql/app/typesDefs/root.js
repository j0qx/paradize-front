/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-server-express';
// TODO : type from  base seems strange , check it and ajust this file

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;
export default root;
