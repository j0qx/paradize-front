// import component
import { NavBar } from '../../components';
import style from './Footer.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <div className={style.footer__copyright}>
      <span className={style.footer__copyright__content}>copyright2021©Oparadise</span>
    </div>
    <NavBar className={style.footer__navbar} />
  </div>
);
export default Footer;
