// import NPM
import { Switch, Route, useParams } from 'react-router-dom';
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
import UserSettings from '../UserSettings';
import MyOffer from '../MyOffer';
import Offer from '../Offer';
import ListCardFavoriteSearch from '../ListCardFavoriteSearch';
import ListCardFavoriteOffer from '../ListCardFavoriteOffers';
import CreateOfferModal from '../CreateOfferModal';
import Mentions from '../Mentions/Mentions';
import { Modal } from '../../components';

import style from './Main.module.scss';

const Main = () => {
  const isModalHidden = useSelector((state) => state.domSettings.isModalHidden);
  const isLoginModal = useSelector((state) => state.domSettings.isLoginModal);
  const isSubscribeModal = useSelector((state) => state.domSettings.isSubscribeModal);
  const isOffersModal = useSelector((state) => state.domSettings.isOffersModal);

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
      {(isModalHidden === false) && isOffersModal && (
        <Modal>
          <CreateOfferModal />
        </Modal>
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/legal-notice">
          <Mentions />
        </Route>
        <Route exact path="/offer/:id">
          <Offer />
        </Route>
        <Route exact path="/account/infos">
          <Account>
            <UserInfo />
          </Account>
        </Route>
        <Route exact path="/account/favorites">
          <Account>
            <ListCardFavoriteOffer />
          </Account>
        </Route>
        <Route exact path="/account/myoffers">
          <Account>
            <MyOffer />
          </Account>
        </Route>
        <Route exact path="/account/mysearch">
          <Account>
            <ListCardFavoriteSearch />
          </Account>
        </Route>
        <Route exact path="/account/settings">
          <Account>
            <UserSettings />
          </Account>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* Cette route n'a pas de path, elle sera donc tout le temps appelé si
      aucune a été appelé avant */}
        <Route component={URLError} />
      </Switch>
    </div>
  );
};

export default Main;
