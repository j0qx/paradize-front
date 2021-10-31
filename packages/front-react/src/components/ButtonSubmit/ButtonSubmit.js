import PropTypes from 'prop-types';
import style from './ButtonSubmit.module.scss';

const ButtonSubmit = ({ classCSS, handleButtonClick, buttonName }) => (
  // The button will receive in props, the text it will shows.
  // This button is meant for every purpose based on him.
  <button
    type="submit"
    className={`${classCSS} ${style.button}`}
    onClick={handleButtonClick}
  >
    {buttonName}
  </button>
);

ButtonSubmit.propTypes = {
  classCSS: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func,
  buttonName: PropTypes.string.isRequired,
};

export default ButtonSubmit;
