// import component
import { Map, MapSettings, Modal } from '@oparadise/react-components';
import BoardDatas from '../BoardDatas/BoardDatas';
import './Explore.module.scss';
export function Explore(props) {
  return (
    <div>
      <Map />
      <MapSettings />
      <Modal>
      <BoardDatas />
      </Modal>
      <h1>Welcome to Explore!</h1>
    </div>
  );
}
export default Explore;
