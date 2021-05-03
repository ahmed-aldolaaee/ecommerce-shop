const Rating = ({ rating, reviews }) => {
  return (
    <div>
      <span>
        <i class={rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        <i class={rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        <i class={rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        <i class={rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        <i class={rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
      </span>
      <span className ="ms-2">{`${reviews} reviews`}</span>
    </div>
  );
};

export default Rating;
