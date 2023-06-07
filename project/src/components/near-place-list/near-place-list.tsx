import { OffersType } from '../../types/offer';
import NearPlaceItem from './near-place-item/near-place-item';

type NearPlaceListProps = {
  offers: OffersType,
}

function NearPlaceList({ offers }: NearPlaceListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <NearPlaceItem
          offer={offer}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default NearPlaceList;
