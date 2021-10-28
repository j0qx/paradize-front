import style from './Modal.module.scss';
import { ButtonClose, Map } from '../ButtonClose/ButtonClose';
export function Modal({children}) {
  return (
    <div className={style.modal} >
      {children}
      <ButtonClose
      classCSS={style.modal__closeButton} 
      />
    </div>

  );
}
export default Modal;
