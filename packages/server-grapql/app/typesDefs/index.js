// in this file we combine evry
import root from './root';
import user from './db/user';
import tomtom from './apis/tomtom';

const typeDefs = [
  root,
  user,
  tomtom,
];

export default typeDefs;
