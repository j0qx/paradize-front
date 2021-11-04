/* eslint-disable import/prefer-default-export */
const queryGeo = {
  tomtomSearch: async (_, args, { dataSources }) => dataSources.tomtomApi.Search(args),
};

export {
  queryGeo,
};
