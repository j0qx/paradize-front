import { 
    GraphQLList, 
    GraphQLSchema , 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,} from 'graphql'
  
  import axios from 'axios'
  
  const baseUrlApi = 'https://api.tomtom.com/search/2/poiSearch'
  
const CompanyType = new GraphQLObjectType({
    name:'Company',
    fields:() => ({
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      users:{
        type: GraphQLList(UserType),
        resolve( parentValue, args){
          console.log(parentValue)
          return axios({
            method:'GET',
            url:`${baseUrlApi}/companies/${parentValue.id}/users`
          }).then(response => response.data)
        }
      }
    })
  })
  
  const UserType = new GraphQLObjectType({
    name:'User',
    fields: () => ( {
      id: { type : GraphQLString},
      firstName: {type: GraphQLString},
      age: {type: GraphQLInt },
      companyId: {type: GraphQLInt},
      company: {
        type: CompanyType,
        resolve(parentValue,args){
          console.log(parentValue)
          return axios({
            method:'GET',
            url:`${baseUrlApi}/companies/${parentValue.companyId}`
          }).then(response => response.data)
        }
      }
    })
  })
  
  const MessageType = new GraphQLObjectType({
    name:'Message',
    fields:{
      message:{type: GraphQLString  }
    }
  })
  
  const RootMutationType = new GraphQLObjectType({
    name:'RootMutation',
    fields:{
      addUser:{
        type: UserType,
        args:{
          firstName: {type: GraphQLNonNull(GraphQLString)},
          age: {type: GraphQLNonNull(GraphQLInt)},
          companyId:{type: GraphQLInt}
        },
        resolve(parentValue,args){
          console.log(args)
          return axios({
            method:'POST',
            url: `${baseUrlApi}/users/`,
            data: {...args}
          }).then(response => response.data)
        }
      },
      deleteUser:{
        type: MessageType,
        args:{
          id: {type: GraphQLNonNull(GraphQLString)},
        },
        resolve(parentValue,args){
          console.log(args)
          return axios({
            method:'DELETE',
            url: `${baseUrlApi}/users/${args.id}`,
          })
          .then(response => ({message:'user deleted'}))
          .catch(err =>  {
            console.log(err.response)
            return {message:err.response.statusText}
          })
        }
      }
    }
  })
  
  
  const RootQueryType = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
      company:{
        type: CompanyType,
        args:{id:{type:GraphQLString}},
        resolve(parentValue,args){
          return axios({
            method:'GET',
            url:`${baseUrlApi}/companies/${args.id}`
          }).then(response => response.data)
        }
      },
      users:{
        type: GraphQLList(UserType),
        resolve(){
          return axios({
            method:'GET',
            url:`${baseUrlApi}/users`
          }).then(response => response.data)
        }
      },
      companies:{
        type: GraphQLList(CompanyType),
        resolve(){
          return axios({
            method:'GET',
            url:`${baseUrlApi}/companies`
          }).then(response => response.data)
        }
      },
      user:{
        type: UserType,
        args:{id:{type:GraphQLString}},
        resolve(parentValue,args){
          return axios({
            method:'GET',
            url:`${baseUrlApi}/users/${args.id}`
          }).then(response => response.data)
        }
      }
    }
  })
  
  export default new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
  })