import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import style from './Modal.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import { SET_MODAL_CONTENT, TOGGLE_PRINT_MODAL } from '../../store/actions';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isLoginModal = useSelector((state) => state.domSettings.isLoginModal);
  const isSubscribeModal = useSelector((state) => state.domSettings.isSubscribeModal);
  return (
    <div className={style.modal}>
      {children}
      <ButtonClose
        classCSS={style.modal__closeButton}
        onButtonClick={() => {
          // If the current modal content was UserConnect, we set the state to false
          dispatch({ type: TOGGLE_PRINT_MODAL });
          if (isLoginModal) {
            dispatch(
              {
                type: SET_MODAL_CONTENT,
                modalContent: 'isLoginModal',
              },
            );
          }
          // If the current modal content was UserSubscribe, we set this state to false
          else if (isSubscribeModal) {
            dispatch(
              {
                type: SET_MODAL_CONTENT,
                modalContent: 'isSubscribeModal',
              },
            );
          }
        }}
      />
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
