import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

import { PropTypes } from 'prop-types';

const BarsMarker = ({
  address, id, position, poi,
}) => {
  const customPub = renderToStaticMarkup(
    <img
      src="https://img.icons8.com/external-wanicon-two-tone-wanicon/64/000000/external-alcohol-allergies-wanicon-two-tone-wanicon.png"
      alt="cocktail marker"
    />,
  );
  const iconPub = divIcon({
    html: customPub,
    iconSize: [0, 0],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  const newId = ((Number.isNaN(id) ? id : 1) + Math.random()) * 100;
  return (
    <Marker key={newId} icon={iconPub} position={position}>
      <Popup>
        <p>{poi.name}</p>
        <p>{address.streetName}</p>
        <p>{address.postalCode}</p>
        <p>{address.municipality}</p>
      </Popup>
    </Marker>
  );
};

BarsMarker.propTypes = {
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

export default BarsMarker;
