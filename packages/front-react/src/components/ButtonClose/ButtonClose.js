import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ButtonClose.module.scss';

const ButtonClose = ({ classCSS }) => (
  <div className={classCSS}>
    <FontAwesomeIcon icon={faTimes} size="lg" />
  </div>
);

ButtonClose.propTypes = {
  classCSS: PropTypes.string.isRequired,
};

export default ButtonClose;
