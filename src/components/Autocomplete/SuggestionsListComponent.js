/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import style from './suggestionsListComponent.module.scss';

const SuggestionsListComponent = ({ onClick }) => {
  const activeSuggestionIndex = useSelector((state) => state.search.autoComplete.activeSuggestionIndex);
  const filteredSuggestions = useSelector((state) => state.search.autoComplete.filteredSuggestions);
  return filteredSuggestions.length ? (
    <ul className={style.suggestions}>
      {filteredSuggestions.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = 'suggestion_active';
        }
        return (
          <li className={style[className]} key={suggestion} onClick={onClick}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={style.no_suggestions}>
      <em>No suggestions, you're on your own!</em>
    </div>
  );
};

SuggestionsListComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SuggestionsListComponent;
