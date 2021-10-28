import './ButtonSubmit.module.scss';
import PropTypes from 'prop-types';

const ButtonSubmit = ({ classCSS, handleButtonClick, buttonName }) => (
  // The button will receive in props, the text it will shows.
  // This button is meant for every purpose based on him.
  <button
    type="submit"
    className={classCSS}
    onClick={handleButtonClick}
  >
    {buttonName}
  </button>
);

ButtonSubmit.propTypes = {
  classCSS: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ButtonSubmit;
