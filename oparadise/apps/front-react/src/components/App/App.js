// import component
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './app.module.scss';



export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
