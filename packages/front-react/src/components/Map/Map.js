import './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, TileLayer, Marker, Popup, LayersControl,
} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { useState } from 'react';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([51.505, -0.09]);
  // Base map tile:
  const maps = {
    base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    sattelite: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  };
  return (
    <MapContainer
      style={{ height: '74vh' }}
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
      <Marker icon={DefaultIcon} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
