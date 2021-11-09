import { useDispatch, useSelector } from 'react-redux';
import { PRINT_SUGGESTIONS_ADRESS, SET_SUGGESTION_VALUE } from '../../store/actions';
import SuggestionsListComponent from './SuggestionsListComponent';
import style from './autocomplete.module.scss';

const AutoComplete = () => {
  const suggestions = [
    'Alligator',
    'Bask',
    'Crocodilian',
    'Death Roll',
    'Eggs',
    'Jaws',
    'Reptile',
    'Solitary',
    'Tail',
    'Wetlands',
  ];
  const dispatch = useDispatch();
  const showSuggestions = useSelector((state) => state.search.autoComplete.showSuggestions);
  const inputValue = useSelector((state) => state.search.autoComplete.inputValue);

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    dispatch({
      type: PRINT_SUGGESTIONS_ADRESS,
      inputValue: e.target.value,
      filteredSuggestions: unLinked,
    });
  };
  const onClick = (e) => {
    dispatch({
      type: SET_SUGGESTION_VALUE,
      filteredSuggestions: [],
      inputValue: e.target.innerText,
      activeSuggestionIndex: 0,
      showSuggestions: false,
    });
  };
  return (
    <div className={style.autocomplete_container}>
      <input
        type="text"
        className={style.input_autocomplete}
        onChange={onChange}
        /* onKeyDown={onKeyDown} */
        value={inputValue}
        placeholder="A l'adresse suivante..."
      />
      {showSuggestions && inputValue && <SuggestionsListComponent onClick={onClick} />}
    </div>
  );
};
export default AutoComplete;
