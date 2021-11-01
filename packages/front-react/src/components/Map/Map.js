import './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, TileLayer, Marker, Popup, LayersControl,
} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  useQuery,
  gql
} from '@apollo/client'


import { useState } from 'react';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const position = [48.863007, 2.338288]
  const { loading, error, data } = useQuery(gql`
      query Query {
  tomtomSearch(keyword: "theatre", lat: 48.863007, lon: 2.338288, radius: 1000) {
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

    `);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  // Base map tile:
  const maps = {
    base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    sattelite: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  };
  return (
    <MapContainer
      style={{ height: '100%' }}
      center={position}
      zoom={13}
      zoomControl={false}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={maps.base}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Sattelite">
          <TileLayer
            url={maps.sattelite}
            maxZoom={20}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      {
        data.tomtomSearch.map(({id,position, address, poi} )=> (
          <Marker key={id} icon={DefaultIcon} position={position}>
          <Popup>
          <p>{poi.name}</p>
          <p>{address.streetName}</p>
          <p>{address.postalCode}</p>
          <p>{address.municipality}</p>
          </Popup>
        </Marker>
        ))
      }

    </MapContainer>
  );
};
export default Map;
