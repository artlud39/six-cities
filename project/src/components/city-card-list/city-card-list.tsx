import { OffersType } from '../../types/offer';
import CityCard from '../city-card/city-card';

type CityCardListProps = {
  offers: OffersType,
  isFavoritePage?: boolean
}

function CityCardList({ offers, isFavoritePage = false }: CityCardListProps): JSX.Element {
  return (
    <div className={`${isFavoritePage ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => (
        <CityCard
          offer={offer}
          key={offer.id}
          isFavoritePage={isFavoritePage}
        />
      ))}
    </div>
  );
}

export default CityCardList;
