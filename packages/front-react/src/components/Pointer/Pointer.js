import './Pointer.module.scss';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CURRENT_POS, GET_DATAS_FROM_API } from '../../store/actions';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';

function LocationMarker() {
  const currentPos = useSelector((state) => state.map.currentPos);
  const allCheckboxs = useSelector((state) => state.search.apiSettings);
  const dispatch = useDispatch();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      dispatch({
        type: CHANGE_CURRENT_POS,
        inputLatPos: lat,
        inputLngPos: lng,
      });
      //   // here we check if only one box is checked, if yes
      //   // we loop on the checked checkboxs array, and for each one
      //   // we dispatch GET_DATAS_FROM_API to request the api
      if (getAllCheckedCheckboxs(allCheckboxs).length > 0) {
        getAllCheckedCheckboxs(allCheckboxs).forEach((checkBoxeName) => {
          dispatch({
            type: GET_DATAS_FROM_API,
            keyword: checkBoxeName,
          });
        });
      }
    },
  });

  return (
    currentPos[0] !== 0
      ? (
        <Marker
          position={currentPos}
          icon={new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>You are here</Popup>
        </Marker>
      )

      : null
  );
}

export default LocationMarker;
