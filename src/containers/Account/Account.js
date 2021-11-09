// import component
import PropTypes from 'prop-types';
import { TabNavBar } from '../../components';

import style from './Account.module.scss';

const Account = ({ children }) => (
  <div>
    <TabNavBar navPages={[
      {
        linkTo: '/account/infos',
        title: 'mon compte',
      },
      {
        linkTo: '/account/myoffers',
        title: 'Mes annonces',
      },
      {
        linkTo: '/account/favorites',
        title: 'Mes annonces sauvegardées',
      },
      {
        linkTo: '/account/mysearch',
        title: 'Mes recherches',
      },
      {
        linkTo: '/account/settings',
        title: 'Paramétres',
      },
    ]}
    />
    <div className={style.account__container}>
      {children}
    </div>
  </div>
);

Account.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Account;
