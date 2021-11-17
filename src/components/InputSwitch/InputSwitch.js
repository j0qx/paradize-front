/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import style from './InputSwitch.module.scss';
import { SWITCH_OFFERS } from '../../store/actions';

const InputSwitch = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const inputSwitch = useSelector((state) => state.search.inputSwitch);
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faScroll} size="2x" color="#406F8A" />
      <span className={location === '/explore' ? style.text : style.display__none}>Annonces</span>

      <input
        type="checkbox"
        checked={inputSwitch}
        value={inputSwitch}
        className={style.react__switch__checkbox}
        id={style.react__switch__new}
      />
      <label
        style={{ background: inputSwitch && '#9DBDB2' }}
        className={style.react__switch__label}
        htmlFor={style.react__switch__new}
        onClick={() => {
          dispatch({
            type: SWITCH_OFFERS,
            inputField: 'inputSwitch',
          });
        }}
      >
        <span className={style.react__switch__button} />
      </label>
    </div>
  );
};

export default InputSwitch;
