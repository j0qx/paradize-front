import PropTypes from 'prop-types';
import style from './Modal.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';

const Modal = ({ children }) => (
  <div className={style.modal}>
    {children}
    <ButtonClose
      classCSS={style.modal__closeButton}
    />
  </div>

);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
