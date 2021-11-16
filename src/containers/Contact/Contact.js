import style from './Contact.module.scss';
import mountains from '../../assets/image/map.jpg';

const Contact = () => (
  <div className={style.container__contact}>
    <img className={style.background} src={mountains} alt="" />
    <div className={style.container__contact__card}>
      <img
        className={style.container__contact__card__img}
        src="https://avatars.githubusercontent.com/u/64959890?v=4.png"
        alt="Avatar"
      />
      <h1 className={style.container__contact__card__name}>Erwin Bottius</h1>
      <h2 className={style.container__contact__card__role}>Rôle</h2>
      <h3>Lead front-end</h3>

      <a target="_blank" href="https://github.com/Erwin-Bottius" rel="noreferrer">Profil Github</a>
      <a target="_blank" href="https://github.com/Erwin-Bottius" rel="noreferrer">Profil LinkedIn</a>
    </div>

    <div className={style.container__contact__card}>
      <img
        className={style.container__contact__card__img}
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHtMeWAFsS6kA/profile-displayphoto-shrink_200_200/0/1634649454151?e=1640822400&v=beta&t=2ki-tE9KUnRCO2HoTCR5WTG7LCogQnDW-COndnN5PtI"
        alt="Avatar"
      />
      <h1 className={style.container__contact__card__name}>Pierre-Marie</h1>
      <h1 className={style.container__contact__card__name}>Ferrand-Eynard</h1>
      <h2 className={style.container__contact__card__role}>Rôle</h2>
      <h3>Scrum-Master</h3>
      <a target="_blank" href="https://github.com/doudou3180" rel="noreferrer">Profil Github</a>
      <a target="_blank" href="https://www.linkedin.com/in/pierre-marie-ferrand-eynard-53aa31a9/" rel="noreferrer">Profil LinkedIn</a>
    </div>

    <div className={style.container__contact__card}>
      <img
        className={style.container__contact__card__img}
        src="https://avatars.githubusercontent.com/u/25654492?v=4.png"
        alt="Avatar"
      />
      <h1 className={style.container__contact__card__name}>Romain Leclerc</h1>
      <h2 className={style.container__contact__card__role}>Rôle</h2>
      <h3>Product Owner</h3>
      <a target="_blank" href="https://github.com/romlec" rel="noreferrer">Profil Github</a>
      <a target="_blank" href="https://www.linkedin.com/in/romainleclerc/" rel="noreferrer">Profil LinkedIn</a>
    </div>

    <div className={style.container__contact__card}>
      <img
        className={style.container__contact__card__img}
        src="https://avatars.githubusercontent.com/u/85259867?v=4"
        alt="Avatar"
      />
      <h1 className={style.container__contact__card__name}>Pierre jöel MBABO</h1>
      <h2 className={style.container__contact__card__role}>Rôle</h2>
      <h3>Lead Back-end</h3>
      <a target="_blank" href="https://github.com/Pierre-joel96" rel="noreferrer">Profil Github</a>
      <a target="_blank" href="https://www.linkedin.com/in/pierre-joel-mbabo-b45ba621a" rel="noreferrer">Profil LinkedIn</a>
    </div>

    <div className={style.container__contact__card}>
      <img
        className={style.container__contact__card__img}
        src="https://media-exp1.licdn.com/dms/image/C5603AQGxMw6eUI_JFQ/profile-displayphoto-shrink_200_200/0/1609191606222?e=1640822400&v=beta&t=bWrScqLp7tI5Lu3wcm1RMou3wjCkLW_PKtYhQNCFLQE"
        alt="Avatar"
      />
      <h1 className={style.container__contact__card__name}>Benjamin Vasseur</h1>
      <h2 className={style.container__contact__card__role}>Rôle</h2>
      <h3>Git-Master</h3>
      <a target="_blank" href="https://github.com/j0qx" rel="noreferrer">Profil Github</a>
      <a target="_blank" href="https://www.linkedin.com/in/benjamin-vasseur-1030b81b9/" rel="noreferrer">Profil LinkedIn</a>
    </div>

  </div>

);

export default Contact;
