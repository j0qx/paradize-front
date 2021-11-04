import { Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

import { PropTypes } from 'prop-types';

const ParkMarker = ({
  address, id, position, poi,
}) => {
  const customPark = renderToStaticMarkup(<FontAwesomeIcon icon={faTree} size="4x" />);
  const iconPark = divIcon({
    html: customPark,
    iconSize: [0, 0],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
  return (
    <Marker key={newId} icon={iconPark} position={position}>
      <Popup>
        <p>{poi.name}</p>
        <p>{address.streetName}</p>
        <p>{address.postalCode}</p>
        <p>{address.municipality}</p>
      </Popup>
    </Marker>

  );
};

ParkMarker.propTypes = {
  address: PropTypes.shape({
    streetName: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    municipality: PropTypes.string.isRequired,
  }).isRequired,
  poi: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  position: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ParkMarker;
