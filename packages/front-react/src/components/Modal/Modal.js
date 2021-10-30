import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Modal.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import { TOGGLE_PRINT_MODAL } from '../../store/actions';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.modal}>
      {children}
      <ButtonClose
        classCSS={style.modal__closeButton}
        onButtonClick={() => {
          dispatch({ type: TOGGLE_PRINT_MODAL });
        }}
      />
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
