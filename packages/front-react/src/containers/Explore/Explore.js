// import component

import {
  Map, MapSettings, Modal, ListCardOffer,
} from '../../components';

import BoardDatas from '../BoardDatas';
import './Explore.module.scss';

const Explore = () => (
  <div>
    <Map />
    <ListCardOffer />
    <MapSettings />
    <Modal>
    </Modal>
    <BoardDatas />
    <h1>Welcome to Explore!</h1>
  </div>
);

export default Explore;
