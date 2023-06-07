import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';


type ReviewListProps = {
  reviews: Reviews,
}

function ReviewList({reviews} :ReviewListProps ) {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((item) => (
            <ReviewItem review={item} key={item.id}/>
          ))
        }
      </ul>
    </>
  );
}

export default ReviewList;
