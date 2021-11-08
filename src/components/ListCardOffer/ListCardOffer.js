import { useSelector } from 'react-redux';
import style from './ListCardOffer.module.scss';
import CardOffer from '../CardOffer';

const ListCardOffer = () => {
  const isLeftSlideOpen = useSelector((state) => state.domSettings.isLeftSlideOpen);

  // need mapping on data to dysplay real offers.
  const CardOffers = [
    {
      title: 'La Motte ',
      subTitle: 'Maison à vendre',
      description: "superbe maison au bord LA MOTTE - Cadre naturel ! Au calme absolu, en fond d'impasse et dans un quartier très recherché, villa de qualité de construction traditionnelle offrant 6 pièces 167m² habitables et se composant d'une cuisine indépendante aménagée et équipée, buanderie, salon-salle à manger avec mezzanine, 1 chambre... la mer superbe maison au bord de la mer  superbe maison au bord de la mer ",
      picture: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      price: '748000 €',
      id: 1,
    },
    {
      title: 'St-Raphaël',
      subTitle: 'Villa au calme à St RAPHAEL',
      description: "Jolie villa située à proximité de la mer, possibilité d'y accéder à pied. Elle vous offre un séjour cuisine aménagé équipé, 1 chambre avec sa salle d'eau, 3 autres chambres, 1 salle de bain et un toilette. Au sous-sol un studio pour recevoir vos amis ou louer. Le tout se trouve sur un joli terrain paysagé avec piscine, poolhouse et abris jardin.",
      picture: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      price: '450000 €',
      id: 2,
    },
    {
      title: 'annonce de la maison 3',
      subTitle: 'Maison à vendre',
      description: 'superbe maison au bord de la mer ',
      picture: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      price: '748000 €',
      id: 3,
    },
    {
      title: 'annonce de la maison 4',
      subTitle: 'Maison à vendre',
      description: 'superbe maison au bord de la mer ',
      picture: 'https://kindabreak.com/wp-content/uploads/2012/08/BeachHouse7.jpg',
      price: '748000 €',
      id: 4,
    },

  ];

  return (

    <div className={isLeftSlideOpen ? style.list__container : style.list__container_close}>
      <div className={style.list__container__main}>
        {
          CardOffers.map(({
            title, description, picture, subTitle, price, id,
          }) => (
            <CardOffer
              title={title}
              description={description}
              subTitle={subTitle}
              picture={picture}
              price={price}
              key={id}
            />
          ))
        }
      </div>
    </div>
  );
};
export default ListCardOffer;
