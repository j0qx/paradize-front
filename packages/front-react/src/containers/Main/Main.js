// import component
import Account from '../Account';
import URLError from '../URLError';
import Explore from '../Explore';
import './Main.module.scss';

const Main = () => (
  <div>
    <URLError />
    <Explore />
    <Account />
    <h1>Welcome to Main!</h1>
  </div>
);

export default Main;
