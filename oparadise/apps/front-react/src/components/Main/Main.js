//import component
import Account from '../Account/Account';
import URLError from '../URLError/URLError';
import Explore from '../Explore/Explore';
import { Offer, Modal } from '@oparadise/react-components';
import './Main.module.scss';

export function Main(props) {
  return (
    <div>
      <Offer />
      <Modal />
      <Modal />
      <URLError />
      <Explore />
      <Account />
      <h1>Welcome to Main!</h1>
    </div>
  );
}
export default Main;
