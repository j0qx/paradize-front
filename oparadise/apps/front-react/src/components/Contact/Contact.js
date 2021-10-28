import style from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={style.container__contact}>
      <div className={style.container__contact__card}>
        <img className={style.container__contact__card__img}
      src="https://avatars.githubusercontent.com/u/64959890?v=4.png"
      alt="Avatar" />
        <h1 className={style.container__contact__card__role}>Rôle</h1>
        <h2>Lead Développeur front-end</h2>
      </div>
      <div className={style.contact__card}>
        <img className={style.container__contact__card__img}
      src="https://avatars.githubusercontent.com/u/64959890?v=4.png"
      alt="Avatar" />
        <h1 className={style.container__contact__card__role}>Rôle</h1>
        <h2>Scrum-Master</h2>
      </div>
    </div>
    
  );
}
export default Contact;
