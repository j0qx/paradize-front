import { gql } from 'apollo-server-express';

const geoApi = gql`
  type Risques_detail{
    num_risque: String
    libelle_risque_long: String
    zone_sismicite: String 
  }

  type Risques{
    code_insee: String
    libelle_commune: String
    risques_detail:[Risques_detail]
  }

  type Data{
    risques:[Risques]
  }  

  type GeoApi {
    results: Int
    page: Int
    total_pages:Int
    response_code: Int,
    message: String,
    next: String,
    previous: String
    data: [Data]
  }
`
export default geoApi;
