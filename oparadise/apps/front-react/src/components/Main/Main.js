//import component
import Account from '../Account/Account';
import URLError from '../URLError/URLError';
import Explore from '../Explore/Explore';
import { Modal } from '@oparadise/react-components';
import './Main.module.scss';

export function Main(props) {
  return (
    <div>
      <Modal />
      <URLError />
      <Explore />
      <Account />
      <h1>Welcome to Main!</h1>
    </div>
  );
}
export default Main;
