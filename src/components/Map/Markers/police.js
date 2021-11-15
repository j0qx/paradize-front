import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

import { PropTypes } from 'prop-types';

const PoliceMarker = ({
  address, id, position, poi,
}) => {
  const customPoliceIcon = renderToStaticMarkup(
    <img
      src="https://img.icons8.com/fluency/48/000000/police-station.png"
      alt="police logo"
    />,
  );
  const iconPolice = divIcon({
    html: customPoliceIcon,
    iconSize: [0, 0],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
  return (
    <Marker key={newId} icon={iconPolice} position={position}>
      <Popup>
        <p>{poi.name}</p>
        <p>{address.streetName}</p>
        <p>{address.postalCode}</p>
        <p>{address.municipality}</p>
      </Popup>
    </Marker>

  );
};

PoliceMarker.propTypes = {
  address: PropTypes.shape({
    streetName: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    municipality: PropTypes.string.isRequired,
  }).isRequired,
  poi: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired,
};

export default PoliceMarker;
