import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

import {
  MapContainer, TileLayer, LayersControl,
} from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { GET_DATAS_FROM_API, CHANGE_CURRENT_POS } from '../../store/actions';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';
import LocationMarker from '../Pointer';
import {
  BarsMarker,
  SchoolMarker,
  PoliceMarker,
  ShopMarker,
  HospitalMarker,
  ParkMarker,
} from './Markers';
import getCheckboxs from '../../store/selectors/getCheckboxs';
import style from './Map.module.scss';

/* const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
}); */

const Map = () => {
  // const dispatch = useDispatch();
  const currentPos = useSelector((state) => state.map.currentPos);
  // // here we have all the checkboxes (checked and not checked)
  const allCheckboxs = useSelector((state) => state.search.apiSettings);
  // useEffect(() => {
  //   }
  // }, [currentPos]);

  // Base map tile:
  const maps = {
    base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    sattelite: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    pretty: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  };

  return (
    <div className={style.mapContainer}>
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
        { /* here we check if the checkbox is checked, if yes,
      we print all markers about it */}
        <MarkerClusterGroup
          disableClusteringAtZoom={16}
        >
          {
        getCheckboxs('bars', allCheckboxs).checked && (
          getCheckboxs('bars', allCheckboxs).result.map(({
            id, position, address, poi,
          }) => {
            const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
            return (
              <BarsMarker
                id={newId}
                key={newId}
                position={position}
                address={address}
                poi={poi}
              />
            );
          })
        )
}
          {
        getCheckboxs('ecoles', allCheckboxs).checked && (
          getCheckboxs('ecoles', allCheckboxs).result.map(({
            id, position, address, poi,
          }) => {
            const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
            return (
              <SchoolMarker
                id={newId}
                key={newId}
                position={position}
                address={address}
                poi={poi}
              />
            );
          }))
}
          {
        getCheckboxs('police', allCheckboxs).checked && (
          getCheckboxs('police', allCheckboxs).result.map(({
            id, position, address, poi,
          }) => {
            const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
            return (
              <PoliceMarker
                id={newId}
                key={newId}
                position={position}
                address={address}
                poi={poi}
              />
            );
          })
        )
}
          {
        getCheckboxs('parcs', allCheckboxs).checked && (
          getCheckboxs('parcs', allCheckboxs).result.map(({
            id, position, address, poi,
          }) => {
            const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
            return (
              <ParkMarker
                id={newId}
                key={newId}
                position={position}
                address={address}
                poi={poi}
              />
            );
          })
        )
}
          {
        getCheckboxs('hopital', allCheckboxs).checked
        && (getCheckboxs('hopital', allCheckboxs).result.map(({
          id, position, address, poi,
        }) => {
          const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
          return (
            <HospitalMarker
              id={newId}
              key={newId}
              position={position}
              address={address}
              poi={poi}
            />
          );
        }))
}
          {
      getCheckboxs('supermarcket', allCheckboxs).checked && (
        getCheckboxs('supermarcket', allCheckboxs).result.map(({
          id, position, address, poi,
        }) => {
          const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
          return (
            <ShopMarker
              id={newId}
              key={newId}
              position={position}
              address={address}
              poi={poi}
            />
          );
        }))
}
        </MarkerClusterGroup>
        <LocationMarker />
      </MapContainer>
    </div>
  );
};
export default Map;
