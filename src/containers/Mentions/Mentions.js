/* eslint-disable max-len */
import style from './Mentions.module.scss';
import mappix from '../../assets/image/map.jpg';

const Mentions = () => (
  <div className={style.main}>
    <img className={style.pix} src={mappix} alt="" />
    <div className={style.mention}>
      <h4>Edition du site</h4>
      <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site oparadise.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        <br /> Le site Oparadise.fr est édité par la société Oparadise, société par actions simplifiée au capital de 0 euros .
      </p>
      <h4>Responsable de publication</h4>
      <p>Romain Leclerc</p>
      <h4>Nous contacter</h4>
      <p>Par email : oparadise@oparadise.fr</p>
      <h4>Hébergeur</h4>
      <p>Le site oparadise est hébergé par la société Amazon Web Services LLC</p>
    </div>
  </div>
);
export default Mentions;
