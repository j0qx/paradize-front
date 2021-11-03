import './Pointer.module.scss';
import { MapConsumer } from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useDispatch } from 'react-redux';
import icon from '../../assets/image/leaf-green.png';
import { CHANGE_CURRENT_POS } from '../../store/actions';

const Pointer = () => {
  const dispatch = useDispatch();

  const targetUserIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  let marker = null;
  return (
    <MapConsumer>
      {(map) => {
        map.on('click', (e) => {
          if (marker !== null) {
            map.removeLayer(marker);
          }
          const { lat, lng } = e.latlng;
          marker = L.marker([lat, lng], { icon: targetUserIcon }).addTo(map);
          dispatch({
            type: CHANGE_CURRENT_POS,
            inputLatPos: lat,
            inputLngPos: lng,
          });
        });
        return null;
      }}
    </MapConsumer>
  );
};
export default Pointer;
