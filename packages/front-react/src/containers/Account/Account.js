// import component
import { TabNavBar, MyOffers, ListCardFavoriteSearch } from '../../components';
import UserSettings from '../UserSettings';
import UserInfo from '../UserInfo';

import './Account.module.scss';

const Account = () => (
  <div>
    <TabNavBar />
    <MyOffers />
    <ListCardFavoriteSearch />
    <UserSettings />
    <UserInfo />
    <h1>Welcome to Account!</h1>
  </div>
);
export default Account;
