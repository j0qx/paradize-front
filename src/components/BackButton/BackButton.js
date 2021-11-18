import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './BackButton.module.scss';

const BackButton = () => (
  <input
    type="submit"
    value="Map"
    className={style.button__back}
    onClick={() => {

    }}
  />
);

export default BackButton;
