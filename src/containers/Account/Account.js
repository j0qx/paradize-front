// import component
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TabNavBar } from '../../components';
import style from './Account.module.scss';
import { GET_USER_DATAS } from '../../store/actions';

const Account = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USER_DATAS,

    });
  }, []);
  return (
    <div>
      <TabNavBar navPages={[
        {
          linkTo: '/account/infos',
          title: 'Mon compte',
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
};

Account.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Account;
