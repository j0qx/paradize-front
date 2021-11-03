/* eslint-disable import/prefer-default-export */

const tomtomSearch = (keyword, lat, lon, radius, limit) => `
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

export {
  tomtomSearch,
};
