import styles from './app.module.scss';

import { Chart, CardOffer ,Card} from '@oparadise/react-components'

export function App() {
  return (
    <div className={styles.app}>
      <Chart />
      <CardOffer />
      <Card />
    </div>
  );
}

export default App;
