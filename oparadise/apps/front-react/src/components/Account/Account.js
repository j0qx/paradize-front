// import component
import { TabNavBar, MyOffers, ListCardFavoriteSearch } from '@oparadise/react-components';
import UserSettings from '../UserSettings/UserSettings';
import UserInfo from '../UserInfo/UserInfo';

import { ButtonClose } from '@oparadise/react-components';

import './Account.module.scss';

export function Account(props) {
  return (
    <div>
      <TabNavBar />
      <MyOffers />
      <ListCardFavoriteSearch />
      <UserSettings />
      <UserInfo />
      <h1>Welcome to Account!</h1>
      <ButtonClose />
    </div>
  );
}
export default Account;
