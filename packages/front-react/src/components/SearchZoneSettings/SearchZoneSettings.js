import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SearchZoneSettings.module.scss';
import InputBase from '../InputBase';
import ButtonSubmit from '../ButtonSubmit';
import {
  CHANGE_INPUT_TIME_VALUE,
  CHANGE_INPUT_MILES_VALUE,
  CHANGE_INPUT_TRANS_VALUE,
  CHANGE_INPUT_VALUE_SEARCH,
  CHANGE_RADIO_BUTTON,
} from '../../store/actions';

const SearchZoneSettings = () => {
  const dispatch = useDispatch();
  const inputValueAddress = useSelector((state) => state.search.inputValueAddress);
  const inputValueTime = useSelector((state) => state.search.inputValueTime);
  const inputValueMiles = useSelector((state) => state.search.inputValueMiles);
  const inputValueTrans = useSelector((state) => state.search.inputValueTrans);
  const valueRadio = useSelector((state) => state.search.valueRadio);

  return (
    <div className={style.search__zone}>
      <form
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputBase
          type="text"
          classCSS="input__search__zone"
          placeholder="À partir de l'adresse..."
          inputName="inputValueAddress"
          inputValue={inputValueAddress}
          actionType={CHANGE_INPUT_VALUE_SEARCH}
        />
        <div className={style.container__selects}>
          <input
            type="radio"
            name="choice"
            value="1"
            onChange={(e) => {
              dispatch({
                type: CHANGE_RADIO_BUTTON,
                inputRadio: 'valueRadio',
                newValue: e.target.value,
              });
            }}
          />
          <select
            disabled={Number(valueRadio) === 2}
            name="isochrone"
            className={style.container__selects__select}
            value={inputValueTime}
            onChange={(e) => {
              dispatch({
                type: CHANGE_INPUT_TIME_VALUE,
                inputField: 'inputValueTime',
                newValue: e.target.value,
              });
            }}
          >
            <option value="">À moins de...</option>
            <option value="15">15 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="60">1 heure</option>
            <option value="75">1 heure, 15 minutes</option>
            <option value="90">1 heure, 30 minutes</option>
            <option value="120">2 heures</option>
          </select>
          <input
            type="radio"
            name="choice"
            value="2"
            onChange={(e) => {
              dispatch({
                type: CHANGE_RADIO_BUTTON,
                inputRadio: 'valueRadio',
                newValue: e.target.value,
              });
            }}
          />
          <select
            disabled={Number(valueRadio) !== 2}
            name="radius"
            className={style.container__selects__select}
            value={inputValueMiles}
            onChange={(e) => {
              dispatch({
                type: CHANGE_INPUT_MILES_VALUE,
                inputField: 'inputValueMiles',
                newValue: e.target.value,
              });
            }}
          >
            <option value="">Sur une distance de...</option>
            <option value="5000">5 km</option>
            <option value="10000">10 km</option>
            <option value="15000">15 km</option>
            <option value="20000">20 km</option>
            <option value="25000">25 km</option>
            <option value="30000">30 km</option>
            <option value="35000">35 km</option>
            <option value="40000">40 km</option>
            <option value="45000">45 km</option>
            <option value="50000">50 km</option>
            <option value="75000">75 km</option>
            <option value="100000">100 km</option>
            <option value="150000">150 km</option>
          </select>
          <select
            disabled={Number(valueRadio) === 2}
            name="means"
            className={style.container__selects__select}
            value={inputValueTrans}
            onChange={(e) => {
              dispatch({
                type: CHANGE_INPUT_TRANS_VALUE,
                inputField: 'inputValueTrans',
                newValue: e.target.value,
              });
            }}
          >
            <option value="">Moyen de transport...</option>
            <option value="voiture">Voiture</option>
            <option value="piéton">Piéton</option>
            <option value="vélo">Vélo</option>
            <option value="bus">Bus</option>
            <option value="train">Train </option>
          </select>
        </div>
        <div>
          <Link to="/explore">
            <ButtonSubmit
              buttonName="C'est parti!"
              classCSS=""
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SearchZoneSettings;
