import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './BackButton.module.scss';

const BackButton = ({ value, classCss, handleButtonClick }) => (
  <button
    type="submit"
    className={`${style[classCss]}`}
    onClick={handleButtonClick}
  >
    {value}
  </button>
);

BackButton.propTypes = {

  value: PropTypes.string.isRequired,
  classCss: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func,

};
export default BackButton;
