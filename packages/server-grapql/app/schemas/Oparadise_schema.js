import {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import { userType } from '../defTypes';
import { getUsers, addUser } from '../defResolvers';

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addUser: {
      type: userType,
      args: {
        first_name: { type: GraphQLNonNull(GraphQLString) },
        last_name: { type: GraphQLNonNull(GraphQLString) },
        civility: { type: GraphQLString },
        mail: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString },
        city_code: { type: GraphQLString },
        city: { type: GraphQLString },
        number_phone: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return addUser(args);
      },
    },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: GraphQLList(userType),
      resolve() {
        return getUsers();
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
