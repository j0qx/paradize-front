import style from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={style.container__contact}>

      <div className={style.container__contact__card}>
        <img className={style.container__contact__card__img}
      src="https://avatars.githubusercontent.com/u/64959890?v=4.png"
      alt="Avatar" />
        <h1 className={style.container__contact__card__name}>Erwin Bottius</h1>
        <h2 className={style.container__contact__card__role}>Rôle</h2>
        <h3>Lead Développeur front-end</h3>
        
        <a target="_blank" href="https://github.com/Erwin-Bottius">Profil Github</a>
        <a target="_blank" href="https://github.com/Erwin-Bottius">Profil LinkedIn</a>
      </div>

      <div className={style.container__contact__card}>
        <img className={style.container__contact__card__img}
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHtMeWAFsS6kA/profile-displayphoto-shrink_200_200/0/1634649454151?e=1640822400&v=beta&t=2ki-tE9KUnRCO2HoTCR5WTG7LCogQnDW-COndnN5PtI"
      alt="Avatar" />
        <h1 className={style.container__contact__card__name}>Pierre-Marie</h1>
        <h1 className={style.container__contact__card__name}>Ferrand-Eynard</h1>
        <h2 className={style.container__contact__card__role}>Rôle</h2>
        <h3>Scrum-Master</h3>
        <a target="_blank" href="https://github.com/doudou3180">Profil Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/pierre-marie-ferrand-eynard-53aa31a9/">Profil LinkedIn</a>
      </div>

      <div className={style.container__contact__card}>
        <img className={style.container__contact__card__img}
      src="https://avatars.githubusercontent.com/u/25654492?v=4.png"
      alt="Avatar" />
        <h1 className={style.container__contact__card__name}>Romain Leclerc</h1>
        <h2 className={style.container__contact__card__role}>Rôle</h2>
        <h3>Product Owner</h3>
        <a target="_blank" href="https://github.com/romlec">Profil Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/romainleclerc/">Profil LinkedIn</a>
      </div>

      <div className={style.container__contact__card}>
        <img className={style.container__contact__card__img}
      src="https://avatars.githubusercontent.com/u/25654492?v=4.png"
      alt="Avatar" />
        <h1 className={style.container__contact__card__name}>Romain Leclerc</h1>
        <h2 className={style.container__contact__card__role}>Rôle</h2>
        <h3>Lead Développeur Back-end</h3>
        <a target="_blank" href="https://github.com/Pierre-joel96">Profil Github</a>
        <a target="_blank" href="https://www.linkedin.com/in/romainleclerc/">Profil LinkedIn</a>
      </div>

    </div>
    
  );
}
export default Contact;
