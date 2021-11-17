/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

export const tomtomSearch = (keyword, lat, lon, radius, limit) => `
    query hopital{
        tomtomSearch(keyword: "${keyword}", lat: ${lat}, lon: ${lon}, radius: ${radius}, limit:${limit}) {
            position {
                lat
                lon
            }
            address {
                streetName
                postalCode
                municipality
            }
            poi {
                name
            }
            id
        }
    }
`;

export const loginUser = (email, password) => `query Query {
    login(email: "${email}", password: "${password}"){
        message
        token
    }
  }`;

export const createUser = (username, lastname, firstname, email, password) => ` mutation {
    createUser(username: "${username}", email: "${email}", password: "${password}", last_name: "${lastname}", first_name: "${firstname}") {
      id
    }
}`;

export const deleteUser = (email) => `mutation DeleteUser {
    deleteUser(email: "${email}") {
      message
    }
  }`;
export const getUserDatas = (email) => `query Query {
  user(email: "${email}") {
    id
    username
    first_name
    last_name
    email
    address
    city_code
    city
    phone
    avatar
  }
}`;
// TODO need to fix this mutation
export const updateUserDatas = ({ id, toUpdate, response }) => `
  mutation Mutation {
    updateUser(id: ${id}, toUpdate:${{ ...toUpdate }}) 
      {${[...response]}}
  }`;

// Query who get all the offer create by an User
export const getOffersUser = (id) => `query Offers($userAccountId: Int) {
  offers(user_account_id: ${id}) {
    title
    picture
    id
    description
    status
    coordinate {
      latitude
      longitude
    }
    price
    owner {
      id
    }
  }
}`;
