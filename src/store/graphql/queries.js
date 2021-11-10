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
  }
}`;

export const updateUserDatas = (id, inputValueNickName, inputValueFirstName, inputValueLastName, inputValueEmail, inputValueAddress, inputValuePostalCode, inputValueCity, inputValuePhone) => `
  mutation Mutation {
    updateUser(id: 21, toUpdate: {
      username: "${inputValueNickName}"
      first_name: "${inputValueFirstName}"
      last_name: "${inputValueLastName}"
      address: "${inputValueAddress}"
      email:"pam@pam.com"
      phone:"${inputValuePhone}"
      city_code: 75000
      city: "${inputValueCity}"
      
    }) {
      first_name
      username
      last_name
      civility
      email
      password
      address
      city_code
      city
      phone
      id
    }
  }`;
