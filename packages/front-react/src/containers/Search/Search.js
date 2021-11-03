import style from './Search.module.scss';
import SearchDataSettings from '../../components/SearchDataSettings/SearchDataSettings';
import SearchZoneSettings from '../../components/SearchZoneSettings/SearchZoneSettings';

const Search = () => (
  <div className={style.container__search}>
    <SearchDataSettings />
    <SearchZoneSettings />
  </div>
);
export default Search;
