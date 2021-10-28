import PropTypes from 'prop-types';
import './ButtonClose.module.scss';

const ButtonClose = ({ classCSS }) => (
  <i className={`fas fa-times ${classCSS}`} />
);

ButtonClose.propTypes = {
  classCSS: PropTypes.string.isRequired,
};

export default ButtonClose;
