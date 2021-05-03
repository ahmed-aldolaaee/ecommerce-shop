import Rating from '../Components/Rating';

const HomeScreen = ({ product }) => {

  const ProMap = product.map((product, ind) => {
    return (
      <div className="col-3 mb-3">
        <a href="/" className="cards">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <Rating rating={product.rating} reviews={product.numReviews} />
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">{ProMap}</div>
      </div>
    </div>
  );
};

export default HomeScreen;
