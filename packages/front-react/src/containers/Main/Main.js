// import NPM
import { Switch, Route } from 'react-router-dom';
// import component
import { useSelector } from 'react-redux';
import Account from '../Account';
import URLError from '../URLError';
import Explore from '../Explore';
import Home from '../Home';
import Contact from '../Contact';
import UserConnect from '../UserConnect';
import UserSubscribe from '../UserSubscribe';
import UserInfo from '../UserInfo';
import { Modal } from '../../components';

import style from './Main.module.scss';

const Main = () => {
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  const isLoginModal = useSelector((state) => state.domSettings.isLoginModal);
  const isSubscribeModal = useSelector((state) => state.domSettings.isSubscribeModal);

  
  return (
    <div className={style.main}>
      {/* If the modal is openned and the state isLoginModal is true ( so the click was
        on signIn button) then we print the modal and UserConnect */}
      {(isModalHidden === false) && isLoginModal && (
      <Modal>
        <UserConnect />
      </Modal>
      )}
      {/* If the modal is openned and the state isSubscribeModal is true ( so the click was
        on signUp button) then we print the modal and UserSubscribe */}
      {(isModalHidden === false) && isSubscribeModal && (
        <Modal>
          <UserSubscribe />
        </Modal>
      )}
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
        {/* TEMPORARY /account to view the render , real Route should be  /account/{id}/infos . */}
        <Route exact path="/account">
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
