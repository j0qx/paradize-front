/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Link } from 'react-router-dom';

const Offers = ({
  id, position, url, title,
}) => {
  const icon = divIcon({
    icon: markerIconPng,
    iconSize: [0, 0],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
  return (
    <Marker key={newId} icon={icon} position={[position.latitude, position.longitude]}>
      <Popup>
        <img
          src={url}
          alt="offers house"
        />
        <p>{title}</p>
        <Link to={`/offer/${id}`}> En savoir plus...</Link>
      </Popup>
    </Marker>

  );
};

export default Offers;
