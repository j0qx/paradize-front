import axios from 'axios'
import { 
    GraphQLList, 
    GraphQLSchema , 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,} from 'graphql'
  
  
  
  const RootMutationType = new GraphQLObjectType({
    name:'RootMutation',
    fields:{
    }
  })
  
  
  const RootQueryType = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
     
    }
  })
  
  export default new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  })