import './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, TileLayer, Marker, Popup, LayersControl,
} from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSelector } from 'react-redux';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const currentPos = useSelector((state) => state.map.mapEvents.currentPos);
  const bars = useSelector((state) => state.dataApi.bars);
  const medics = useSelector((state) => state.dataApi.hopital);
  const parcs = useSelector((state) => state.dataApi.parcs);
  const police = useSelector((state) => state.dataApi.police);
  const school = useSelector((state) => state.dataApi.ecoles);
  const shops = useSelector((state) => state.dataApi.shops);
  // Base map tile:
  const maps = {
    base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    sattelite: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    pretty: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  };
  return (
    <MapContainer
      style={{ height: '100%' }}
      center={currentPos}
      zoom={13}

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
        <LayersControl.BaseLayer name="Pretty">
          <TileLayer
            url={maps.pretty}
            maxZoom={18}
            id="mapbox/streets-v11"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      {
        [...school, ...bars, ...medics, ...police, ...parcs, ...shops].map(({
          id, position, address, poi,
        }) => {
          const newId = (Number(Number.isNaN(id) ? id : 1) + Math.random()) * 100;
          return (
            <Marker key={newId} icon={DefaultIcon} position={position}>
              <Popup>
                <p>{poi.name}</p>
                <p>{address.streetName}</p>
                <p>{address.postalCode}</p>
                <p>{address.municipality}</p>
              </Popup>
            </Marker>
          );
        })
}

    </MapContainer>
  );
};
export default Map;
