import styles from './app.module.scss';

import { CardOffer} from '@oparadise/react-components'

export function App() {
  return (
    <div className={styles.app}>
      <CardOffer />
    </div>
  );
}

export default App;
