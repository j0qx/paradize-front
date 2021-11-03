import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import style from './TabNavBar.module.scss';

const TabNavBar = () => {
  { /* state to be here */ }
  return (

    <div className={style.TabNavBar__container}>
      <div className={style.TabNavBar__container__tabs}>
        {/* Tab nav */}
        <ul className={style.TabNavBar__container__tabs__nav}>
          <FontAwesomeIcon className={style.TabNavBar__container__tabs__nav__icon} icon={faHouseUser} size="2x" />
          <li>Mes infos</li>
          <li>Mes Annonces</li>
          <li>Mes Annonces sauvegardées</li>
          <li>Mes recherches</li>
          <li>Paramétres</li>
        </ul>
        <div className={style.TabNavBar__container__content}>
          {/* content will be shown here */}
        </div>
      </div>
    </div>

  );
};

export default TabNavBar;
