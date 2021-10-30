import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './InputBase.module.scss';
import { CHANGE_INPUT_VALUE } from '../../store/actions';

const InputBase = ({
  icon, placeholder, inputName, classCSS, inputValue,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${style.inputContainer} ${classCSS}`}>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        type="text"
        className={style.inputContainer__input}
        placeholder={placeholder}
        name={inputName}
        value={inputValue}
        onChange={(event) => {
          dispatch({
            type: CHANGE_INPUT_VALUE,
            inputField: inputName,
            newValue: event.target.value,
          });
        }}
      />
    </div>
  );
};

InputBase.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  classCSS: PropTypes.string.isRequired,
};

export default InputBase;
