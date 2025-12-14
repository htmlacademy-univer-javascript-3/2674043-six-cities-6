import ReviewProps from '../../types/review-card-type.tsx';

function ReviewCard({comment, date, user, rating}: ReviewProps): JSX.Element {
  const dateObj = new Date(date);
  const dateTimeString = dateObj.toISOString().split('T')[0];
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={`${user.name} avatar`}/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTimeString}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewCard;

