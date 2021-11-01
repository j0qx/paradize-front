import { queryOparadise, mutationOparadise } from './oparadise';
import { queryTomtom } from './tomtom';

const resolvers = {
  Query: {
    ...queryOparadise,
    ...queryTomtom,
  },
  Mutation: {
    ...mutationOparadise,
  },
};

export default resolvers;
