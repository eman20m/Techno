import React from 'react';

export default function Rating(props) {

  const {rating, numReviews} = props;

  return (
    <div className = "view" >
      <span><i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'fa fa-star-o'}></i></span>
      <span><i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'fa fa-star-o'}></i></span>
      <span><i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'fa fa-star-o'}></i></span>
      <span><i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'fa fa-star-o'}></i></span>
      <span><i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'fa fa-star-o'}></i></span>
      <span className="pl-2">{numReviews + ' reviews'}</span>
    </div>
  );
}
