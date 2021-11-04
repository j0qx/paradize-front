import { useLocation } from 'react-router-dom';
import style from './Search.module.scss';
import SearchDataSettings from '../../components/SearchDataSettings/SearchDataSettings';
import SearchZoneSettings from '../../components/SearchZoneSettings/SearchZoneSettings';

const Search = () => {
  const location = useLocation().pathname;
  return (
    <div className={location === '/' ? style.container__search : style.container__explore}>
      <SearchDataSettings />
      <SearchZoneSettings />
    </div>
  );
};

export default Search;
