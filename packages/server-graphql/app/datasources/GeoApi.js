import { RESTDataSource } from 'apollo-datasource-rest';

class GeoApi extends RESTDataSource {
  constructor() {
    super();
    this.baseUrl = 'https://www.georisques.gouv.fr/api/';
  }

  async Search({
    radius, lat, lon, page, pageSize,
  }) {
    const { results } = await this.get(`${this.baseUrl}v1/gaspar/risques?${radius}&latlon=${lat}%${lon}&page=${page}&page_size=${pageSize}`);
    return results;
  }
}

export default GeoApi;
