import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import style from './CreateOffer.module.scss';
import {  TabNavBar } from '..';

const CreateOffer = () => (
  <div className={style.createOffer__main}>
    <TabNavBar />
    <div className={style.createOffer__second}>
      <div className={style.createOffer__second__left}>
        <FontAwesomeIcon icon={faPlusCircle} size="5x" />
        <h3>N'hésitez pas, créer votre propre annonce..</h3>
      </div>
      <div className={style.createOffer__second__right}>
        <h3>composant affichant les offres créer</h3>
      </div>
    </div>
  </div>
);

export default CreateOffer;
