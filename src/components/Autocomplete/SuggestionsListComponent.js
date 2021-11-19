/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import style from './suggestionsListComponent.module.scss';

const SuggestionsListComponent = ({ onClick }) => {
  const activeSuggestionIndex = useSelector((state) => state.search.autoComplete.activeSuggestionIndex);
  const filteredSuggestions = useSelector((state) => state.search.autoComplete.filteredSuggestions);
  const location = useLocation().pathname;
  return filteredSuggestions.length ? (
    <ul className={location === '/explore' ? `${style.suggestions__explore}` : style.suggestions}>
      {filteredSuggestions.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = 'suggestion_active';
        }
        return (
          <li className={style[className]} key={suggestion.geometry.coordinates[0]} onClick={onClick}>
            {suggestion.properties.label}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className={location === '/explore' ? style.no_suggestions__explore : style.no_suggestions}>
      <em>No suggestions, you're on your own!</em>
    </div>
  );
};

SuggestionsListComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SuggestionsListComponent;
