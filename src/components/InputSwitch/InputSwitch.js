/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import style from './InputSwitch.module.scss';

const InputSwitch = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faScroll} size="2x" color="#406F8A" />
      <span className={style.text}>Annonces</span>
      <label className={style.switch}>
        <input className={style.switch__input} type="checkbox" value="On" />
        <span className={style.switch__label} data-on="On" data-off="Off" />
        <span className={style.switch__handle} />
      </label>
    </div>
  );
};

export default InputSwitch;
