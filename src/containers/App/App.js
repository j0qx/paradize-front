import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER_TOKEN_SUCCESS } from '../../store/actions';

// import component
import Main from '../Main';
import Header from '../Header';
import Footer from '../Footer';
import styles from './app.module.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    // if there is a token in the local storage, we set the token an user information in the state
    if (token) {
      dispatch({
        type: GET_USER_TOKEN_SUCCESS,
        accessToken: token,
      });
    }
    // If not, we logout the user
    else {
      localStorage.clear();
      dispatch({ type: 'LOGOUT' });
    }
  }, []);
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
