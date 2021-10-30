// import NPM
import { Switch, Route } from 'react-router-dom';
// import component
import Account from '../Account';
import URLError from '../URLError';
import Explore from '../Explore';
import Home from '../Home';
import Contact from '../Contact';
import style from './Main.module.scss';

const Main = () => (
  <div className={style.main}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/explore">
        <Explore />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      {/* Cette route n'a pas de path, elle sera donc tout le temps appelé si
      aucune a été appelé avant */}
      <Route>
        <URLError />
      </Route>
    </Switch>
  </div>
);

export default Main;
