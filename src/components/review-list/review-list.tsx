import ReviewForm from '../review-form/review-form.tsx';
import ReviewCard from '../review-card/review-card.tsx';
import ReviewProps from '../../types/review-card-type.tsx';

type ReviewListProps = {
  reviewCards: ReviewProps[];
}

function ReviewList({reviewCards}: ReviewListProps): JSX.Element {
  const reviewsCount = reviewCards.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {reviewCards.map((reviewCard) => (
          <ReviewCard
            key={reviewCard.id}
            id={reviewCard.id}
            comment={reviewCard.comment}
            date={reviewCard.date}
            user={reviewCard.user}
            rating={reviewCard.rating}
          />

        ))}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default ReviewList;
