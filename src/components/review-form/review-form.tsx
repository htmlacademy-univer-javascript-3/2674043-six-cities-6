import {ChangeEvent, Fragment, useState, FormEvent} from 'react';
import { fetchAddComments } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AddCommentData } from '../../types/addCommentData';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../constants/authorization-status/authorization-status';
import { CommentLentgh } from '../constants/comment/comment';

const ratingMap = {
  '5': '5-stars',
  '4': '4-stars',
  '3': '3-stars',
  '2': '2-stars',
  '1': '1-stars',
};

function ReviewForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);

  function isValid() {
    return comment.length >= Number(CommentLentgh.Min) &&
    comment.length <= Number(CommentLentgh.Max) &&
    rating !== '';
  }

  function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>){
    setRating(evt.target.value);
  }

  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string }>();
  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault(); // Важно!

    if (!id || !isValid()) {
      return;
    }

    const commentForAdd: AddCommentData = {
      offerId: id,
      comment: comment,
      rating: Number(rating)
    };

    dispatch(fetchAddComments(commentForAdd));
  }

  if (authorizationStatus !== AuthorizationStatus.Auth){
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            Object.entries(ratingMap).reverse().map(([score, status]) => (
              <Fragment key={status}>
                <input
                  key={status}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={score}
                  id={status}
                  type="radio"
                  checked={rating === score}
                  onChange={handleInputChange}
                />
              </Fragment>
            ))
          }
        </div>
      </form>
    );
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(ratingMap).reverse().map(([score, status]) => (
            <Fragment key={status}>
              <input
                key={status}
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={status}
                type="radio"
                checked={rating === score}
                onChange={handleInputChange}
              />

              <label htmlFor={status} className="reviews__rating-label form__rating-label" title={status}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid()}>Submit</button>
      </div>
    </form>
  );
}


export default ReviewForm;
