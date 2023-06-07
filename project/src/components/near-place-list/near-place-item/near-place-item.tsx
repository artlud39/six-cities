import { Link } from 'react-router-dom';
import { OfferType } from '../../../types/offer';
import { getAdaptiveRating } from '../../../utils/utils';
import { getOfferUrl } from '../../../utils/route';


type NearPlaceItemProps = {
  offer: OfferType,
}

function NearPlaceItem({ offer }: NearPlaceItemProps) {
  const { id, type, price, title, previewImage, isPremium, isFavorite, rating } = offer;

  const percentageRating = getAdaptiveRating(rating);
  return (
    <article className="near-places__card place-card">
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null
      }

      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={getOfferUrl(id)}>
          <img className="place-card__image" src={previewImage} width='260' height='200' alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: percentageRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferUrl(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default NearPlaceItem;
