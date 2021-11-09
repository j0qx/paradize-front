import './Pointer.module.scss';
import {
  useMapEvents, Marker, Popup, Circle, GeoJSON,
} from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CURRENT_POS, GET_DATAS_FROM_API, GET_ISOCHRONE } from '../../store/actions';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';

function LocationMarker() {
  const currentPos = useSelector((state) => state.map.currentPos);
  const allCheckboxs = useSelector((state) => state.search.apiSettings);
  const radius = useSelector((state) => state.search.inputValueMiles);
  const isochroneResults = useSelector((state) => state.search.isochroneResults);
  const valueZoneRadio = useSelector((state) => state.search.valueRadio);
  const dispatch = useDispatch();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      dispatch({
        type: CHANGE_CURRENT_POS,
        inputLatPos: lat,
        inputLngPos: lng,
      });
      dispatch({ type: GET_ISOCHRONE });
      map.flyTo(e.latlng, map.getZoom());
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
          {Number(valueZoneRadio) === 2
          && (
          <Circle center={currentPos} radius={radius}>
            <Popup direction="bottom" offset={[0, 0]} opacity={1}>
              Votre recherche s'étend sur : {radius} mètres.
            </Popup>
          </Circle>
          )}
          {(isochroneResults && Number(valueZoneRadio) === 1) && (
            <GeoJSON data={isochroneResults} />
          )}
        </Marker>
      )

      : null
  );
}

export default LocationMarker;
