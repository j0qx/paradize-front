/* eslint-disable import/prefer-default-export */
const queryGeo = {
  geoSearch: async (_, args, { dataSources }) => dataSources.tomtomApi.Search(args),
};

export {
  queryGeo,
};
