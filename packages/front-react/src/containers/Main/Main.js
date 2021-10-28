// import component
import Account from '../Account';
import URLError from '../URLError';
import Explore from '../Explore';
import { Modal } from '../../components';
import './Main.module.scss';

const Main = () => (
  <div>
    <Modal />
    <URLError />
    <Explore />
    <Account />
    <h1>Welcome to Main!</h1>
  </div>
);

export default Main;
