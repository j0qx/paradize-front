/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import style from './InputSwitch.module.scss';
import { SWITCH_OFFERS } from '../../store/actions';

const InputSwitch = () => {
  const dispatch = useDispatch();
  // const switchValue = useSelector((state) => state.);
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faScroll} size="2x" color="#406F8A" />
      <span className={style.text}>Annonces</span>

      <input
        className={style.react__switch__checkbox}
        type="checkbox"
        // value={switchValue}
        //   checked={switchValue}
        //   onChange={(e) => {
        //       console.log(e.target.value);
        //       if (e.target.value === true) {
        //           dispatch({
        //               type: SWITCH_OFFERS,
        //               switchValue: ,
        //             });
        //           }

        //         }}
        id={style.react__switch__new}
      />
      <label
        className={style.react__switch__label}
        htmlFor={style.react__switch__new}
      >
        <span className={style.react__switch__button} />
      </label>
    </div>
  );
};

export default InputSwitch;
