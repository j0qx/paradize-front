// import component
import Main from '../Main';
import Header from '../Header';
import Footer from '../Footer';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
