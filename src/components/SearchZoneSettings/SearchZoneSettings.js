import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation().pathname;
  const inputValueAddress = useSelector((state) => state.search.inputValueAddress);
  const inputValueTime = useSelector((state) => state.search.inputValueTime);
  const inputValueMiles = useSelector((state) => state.search.inputValueMiles);
  const inputValueTrans = useSelector((state) => state.search.inputValueTrans);
  const valueRadio = useSelector((state) => state.search.valueRadio);

  return (
    <div className={location === '/explore' ? style.search__zoneExplore : style.search__zone}>
      <form
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h4 className={style.search__zone__title}>Recherche par distance</h4>
        <div className={style.search__adress}>
          <InputBase
            type="text"
            classCSS={location === '/explore' ? 'searchZone_inpuExplore' : 'input__search__zone'}
            placeholder="À partir de l'adresse..."
            inputName="inputValueAddress"
            inputValue={inputValueAddress}
            actionType={CHANGE_INPUT_VALUE_SEARCH}
          />
        </div>
        <div className={style.container__selects}>
          <div className={style.container__selects__content}>
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
            <div className={location === '/explore' ? style.slider__input : style.container__selects__none}>
              <span className={style.slider__input__display}>{inputValueTime}</span>
              <input
                disabled={Number(valueRadio) === 2}
                defaultValue={30}
                step={5}
                valueLabelDisplay="on"
                type="range"
                min="15"
                max="120"
                value={inputValueTime}
                onChange={(e) => {
                  dispatch({
                    type: CHANGE_INPUT_TIME_VALUE,
                    inputField: 'inputValueTime',
                    newValue: e.target.value,
                  });
                }}
              />
            </div>
            <select
              disabled={Number(valueRadio) === 2}
              name="isochrone"
              className={location === '/explore' ? style.container__selects__none : style.container__selects__content__select}
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
          </div>
          <div className={style.container__selects__content}>
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
              className={location === '/explore' ? style.container__selects__none : style.container__selects__content__select}
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
              <option value="1000">1 km</option>
              <option value="2000">2 km</option>
              <option value="3000">3 km</option>
              <option value="5000">5 km</option>
              <option value="10000">10 km</option>
              <option value="15000">15 km</option>
              <option value="20000">20 km</option>
              <option value="25000">25 km</option>
              <option value="30000">30 km</option>
              <option value="40000">40 km</option>
              <option value="50000">50 km</option>
            </select>
            <div className={location === '/explore' ? style.slider__input : style.container__selects__none}>
              <span className={style.slider__input__display}>{inputValueMiles}</span>
              <input
                disabled={Number(valueRadio) !== 2}
                defaultValue={1000}
                step={1000}
                valueLabelDisplay="on"
                type="range"
                min="1000"
                max="50000"
                value={inputValueMiles}
                onChange={(e) => {
                  dispatch({
                    type: CHANGE_INPUT_MILES_VALUE,
                    inputField: 'inputValueMiles',
                    newValue: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className={style.container__selects__content}>
            <select
              disabled={Number(valueRadio) === 2}
              name="means"
              className={style.container__selects__content__select__transport}
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
        </div>
        <div className={style.search__button}>
          <Link to="/explore">
            <ButtonSubmit
              buttonName="C'est parti !"
              classCSS=""
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SearchZoneSettings;
