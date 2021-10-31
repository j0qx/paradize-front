/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCocktail, faClinicMedical, faShoppingCart, faTree, faHatCowboy, faSchool,
} from '@fortawesome/free-solid-svg-icons';
import style from './SearchDataSettings.module.scss';
import { CHECKBOX_TOGGLE } from '../../store/actions';

const SearchDataSettings = () => {
  const dispatch = useDispatch();
  const bars = useSelector((state) => state.search.bars);
  const medic = useSelector((state) => state.search.medic);
  const schools = useSelector((state) => state.search.schools);
  const shops = useSelector((state) => state.search.shops);
  const parcs = useSelector((state) => state.search.parcs);
  const police = useSelector((state) => state.search.police);

  return (
    // Container where the whole component is sitting.
    <div className={style.container__control}>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>
        <label
          className={style.switch}
        >
          {/* Each input read and change the state from the search reducer to check or uncheck   */}
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="bars"
            type="checkbox"
            checked={bars}
          />
          <span className={`${style.slider} ${style.round}`} />
          <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faCocktail} size="2x" /></p>
        </label>
      </div>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>
        <label
          className={style.switch}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="medic"
            type="checkbox"
            checked={medic}
          />
          <span className={`${style.slider} ${style.round}`} />
          <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faClinicMedical} size="2x" /></p>
        </label>
      </div>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>

        <label
          className={style.switch}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="shops"
            type="checkbox"
            checked={shops}
          />
          <span className={`${style.slider} ${style.round}`} />
          <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faShoppingCart} size="2x" /></p>
        </label>
      </div>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>

        <label
          className={style.switch}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="parcs"
            type="checkbox"
            checked={parcs}
          />
          <span className={`${style.slider} ${style.round}`} />
          <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faTree} size="2x" /></p>
        </label>
      </div>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>

        <label
          className={style.switch}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="police"
            type="checkbox"
            checked={police}
          />
          <span className={`${style.slider} ${style.round}`} />
          <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faHatCowboy} size="2x" /></p>
        </label>
      </div>
      {/* Each label is meant to be a checkbox */}
      <div className={style.container__switch}>
        <label
          className={style.switch}
        >
          <input
            onChange={(e) => {
              dispatch({
                type: CHECKBOX_TOGGLE,
                checkBoxField: e.target.name,
              });
            }}
            name="schools"
            type="checkbox"
            checked={schools}
          />
          <span className={`${style.slider} ${style.round}`} />
        </label>
        <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={faSchool} size="2x" /></p>
      </div>
      {/* Each label is meant to be a checkbox */}
    </div>
  );
};

export default SearchDataSettings;
