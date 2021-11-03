import './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';
import {
  MapContainer, TileLayer, Marker, Popup, LayersControl, useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {
  useQuery,
  gql,
} from '@apollo/client';

import { CHANGE_CURRENT_POS } from '../../store/actions';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const initPosition = [48.863007, 2.338288];
  const { loading, error, data } = useQuery(gql`
  query Query {
    tomtomSearch(keyword: "hopital", lat: 48.863007, lon: 2.338288, radius: 100000, limit:1000) {
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
    pretty: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  };
  const dispatch = useDispatch();
  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        dispatch({
          type: CHANGE_CURRENT_POS,
          inputLatPos: e.latlng.lat,
          inputLngPos: e.latlng.lng,
        });
      },
    });

    return (
      selectedPosition
        ? (
          <Marker
            key={selectedPosition[0]}
            position={selectedPosition}
            interactive={false}
          />
        )
        : null
    );
  };
  return (
    <MapContainer
      style={{ height: '100%' }}
      center={initPosition}
      zoom={13}
      onClick={(e) => {
        dispatch({
          type: CHANGE_CURRENT_POS,
          inputLatPos: e.latlng.lat,
          inputLngPos: e.latlng.lng,
        });
      }}
    >
      <Markers />
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="Map">
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
        <LayersControl.BaseLayer checked name="Pretty">
          <TileLayer
            url={maps.pretty}
            maxZoom={18}
            id="mapbox/streets-v11"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      {
        data.tomtomSearch.map(({
          id, position, address, poi,
        }) => (
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
