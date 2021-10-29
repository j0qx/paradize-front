/* eslint-disable import/prefer-default-export */
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

// TODO : type from  base seems strange , check it and ajust this file

const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    first_name: { type: GraphQLNonNull(GraphQLString) },
    last_name: { type: GraphQLNonNull(GraphQLString) },
    civility: { type: GraphQLString },
    mail: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLString },
    city_code: { type: GraphQLString },
    city: { type: GraphQLString },
    number_phone: { type: GraphQLString },
  }),
});

export {
  userType,
};
