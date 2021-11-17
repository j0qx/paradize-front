/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  PRINT_SUGGESTIONS_ADRESS,
  SET_SUGGESTION_VALUE,
  CHANGE_INPUT_VALUE_SEARCH,
  CHANGE_CURRENT_POS,
  GET_ISOCHRONE,
  CHANGE_CURRENT_POS_OFFER,
  GET_DATA_AIR_POLLUTION,
  GET_OFFERS_DATAS,
  GET_DATAS_FROM_API,
} from '../../store/actions';
import SuggestionsListComponent from './SuggestionsListComponent';
import getAllCheckedCheckboxs from '../../store/selectors/getAllCheckedCheckboxs';
import style from './autocomplete.module.scss';

const AutoComplete = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const filteredSuggestions = useSelector((state) => state.search.autoComplete.filteredSuggestions);
  const showSuggestions = useSelector((state) => state.search.autoComplete.showSuggestions);
  const inputValue = useSelector((state) => state.search.autoComplete.inputValue);
  const valueRadio = useSelector((state) => state.search.valueRadio);
  const allCheckboxs = useSelector((state) => state.search.apiSettings);

  const onChange = (e) => {
    const userInput = e.target.value;
    dispatch({
      type: CHANGE_INPUT_VALUE_SEARCH,
      newValue: userInput,
    });
    axios(`https://api-adresse.data.gouv.fr/search/?q=${userInput.replaceAll(' ', '+')}`)
      .then((result) => {
        dispatch({
          type: PRINT_SUGGESTIONS_ADRESS,
          filteredSuggestions: result.data.features.length ? result.data.features : [],
        });
      });
  };
  const onClick = (e) => {
    // eslint-disable-next-line max-len
    const adressObject = filteredSuggestions.find((element) => element.properties.label === e.target.innerText);
    dispatch({
      type: CHANGE_CURRENT_POS,
      inputLatPos: adressObject.geometry.coordinates[1],
      inputLngPos: adressObject.geometry.coordinates[0],
    });
    dispatch({
      type: SET_SUGGESTION_VALUE,
      filteredSuggestions: [],
      inputValue: e.target.innerText,
      activeSuggestionIndex: 0,
      showSuggestions: false,
    });
    if (location === '/account/myoffers') {
      dispatch({
        type: CHANGE_CURRENT_POS_OFFER,
        inputLatPos: adressObject.geometry.coordinates[1],
        inputLngPos: adressObject.geometry.coordinates[0],
      });
    }
    if (getAllCheckedCheckboxs(allCheckboxs).length > 0) {
      getAllCheckedCheckboxs(allCheckboxs).forEach((checkBoxeName) => {
        dispatch({
          type: GET_DATAS_FROM_API,
          keyword: checkBoxeName,
        });
      });
    }
    dispatch({ type: GET_DATA_AIR_POLLUTION });
    dispatch({ type: GET_OFFERS_DATAS });
    if (location.pathname !== '/' && Number(valueRadio) === 1) {
      dispatch({ type: GET_ISOCHRONE });
    }
  };
  return (
    <div className={style.autocomplete_container}>
      <input
        type="text"
        className={style.input_autocomplete}
        onChange={onChange}
        value={inputValue}
        placeholder="A l'adresse suivante..."
      />
      {showSuggestions && inputValue
      && <SuggestionsListComponent onClick={onClick} />}
    </div>
  );
};
export default AutoComplete;
