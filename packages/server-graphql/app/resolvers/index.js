import { queryOparadise, mutationOparadise } from './oparadise';
import { queryTomtom } from './tomtom';
import { queryGeo } from './geo';

const resolvers = {
  Query: {
    ...queryOparadise,
    ...queryTomtom,
    ...queryGeo,
  },
  Mutation: {
    ...mutationOparadise,
  },
};

export default resolvers;
