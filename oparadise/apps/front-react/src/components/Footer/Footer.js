//import component
import { NavBar } from '@oparadise/react-components';
import style from './Footer.module.scss';
export function Footer(props) {
  return (
    <div className={style.container}>
      <h2>copyright2021©Oparadise</h2>
      <NavBar className={style.navbar} />
    </div>
  );
}
export default Footer;
