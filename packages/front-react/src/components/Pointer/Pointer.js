import './Pointer.module.scss';
import { MapConsumer } from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../assets/image/leaf-green.png';
import { CHANGE_CURRENT_POS, GET_DATAS_FROM_API } from '../../store/actions';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';

const Pointer = () => {
  const dispatch = useDispatch();
  // here we have all the checkboxes (checked and not checked)
  const allCheckboxs = useSelector((state) => state.search.apiSettings);
  const radius = useSelector((state) => state.search.inputValueMiles);

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
  let circle = null;
  return (
    <MapConsumer>
      {(map) => {
        map.on('click', (e) => {
          if (marker !== null) {
            map.removeLayer(marker);
            map.removeLayer(circle);
            return null;
          }
          const { lat, lng } = e.latlng;
          marker = L.marker([lat, lng], { icon: targetUserIcon }).addTo(map);
          circle = L.circle([lat, lng], Number(radius), { opacity: 10, fillOpacity: 0.3, color: 'rgb(157, 189, 178)' }).addTo(map);
          dispatch({
            type: CHANGE_CURRENT_POS,
            payload: {
              lat,
              lng,
            },
          });
          // here we check if only one box is checked, if yes
          // we loop on the checked checkboxs array, and for each one
          // we dispatch GET_DATAS_FROM_API to request the api
          if (getAllCheckedCheckboxs(allCheckboxs).length > 0) {
            getAllCheckedCheckboxs(allCheckboxs).forEach((element) => {
              dispatch({
                type: GET_DATAS_FROM_API,
                keyword: element.checkBoxeName,
              });
            });
          }
        });
        return null;
      }}
    </MapConsumer>
  );
};
export default Pointer;
