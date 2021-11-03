/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './SearchDataSettings.module.scss';
import { CHECKBOX_TOGGLE, GET_DATAS_FROM_API } from '../../store/actions';

const SearchDataSettings = () => {
  const dispatch = useDispatch();

  const checkBoxes = useSelector((state) => state.search.apiSettings);

  return (
    // Container where the whole component is sitting.
    <div className={style.container__control}>
      {/* Each label is meant to be a checkbox */}
      {checkBoxes.map((checkboxe) => (
        <div
          key={checkboxe.checkBoxeName}
          className={style.container__switch}
        >
          <label
            className={style.switch}
          >
            {/* Each input read and change the state from
             the search reducer to check or uncheck   */}
            <input
              onChange={() => {
                // Here we set the new checked value of the state (true or false)
                dispatch({
                  type: CHECKBOX_TOGGLE,
                  checkBoxField: checkboxe.checkBoxeName,
                });
                dispatch({
                  type: GET_DATAS_FROM_API,
                  keyword: checkboxe.checkBoxeName,

                });
              }}
              name={checkboxe.checkBoxeName}
              type="checkbox"
              checked={checkboxe.checked}
            />
            <span className={`${style.slider} ${style.round}`} />
            <p className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={checkboxe.icon} size="2x" /></p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default SearchDataSettings;
