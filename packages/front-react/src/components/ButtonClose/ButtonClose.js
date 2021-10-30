import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ButtonClose.module.scss';

const ButtonClose = ({ classCSS, onButtonClick }) => (
  <div
    className={classCSS}
    onClick={onButtonClick}
  >
    <FontAwesomeIcon icon={faTimes} size="lg" />
  </div>
);

ButtonClose.propTypes = {
  classCSS: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
};

export default ButtonClose;
