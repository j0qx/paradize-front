/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router';
import ReactTooltip from 'react-tooltip';
import style from './SearchDataSettings.module.scss';
import { CHECKBOX_TOGGLE, GET_DATAS_FROM_API } from '../../store/actions';

const SearchDataSettings = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const checkBoxes = useSelector((state) => state.search.apiSettings);

  return (
    // Container where the whole component is sitting.
    <div className={location === '/explore' ? style.container__controlExplore : style.container__control}>
      {location !== '/explore'
      && <p className={style.container__control__title}>Recherche par critéres</p>}
      {/* Each label is meant to be a checkbox */}
      <div className={location === '/' ? style.container__checkboxes : style.container__checkboxesOnexplore}>
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
              {location === '/'
              && (
              <ReactTooltip
                id={checkboxe.checkBoxeName}
                place="top"
                effect="solid"
                data-background-color="#9dbdb2"
              />
              ) }
              <div data-tip={checkboxe.checkBoxeName} data-for={checkboxe.checkBoxeName} className={style.slider__icon}><FontAwesomeIcon className={style.switch__font} icon={checkboxe.icon} size="2x" /></div>
              <span className={location === '/explore' ? style.labels__display : style.labels__none}>{checkboxe.checkBoxeName}</span>
            </label>
          </div>

        ))}
      </div>
    </div>
  );
};

export default SearchDataSettings;
