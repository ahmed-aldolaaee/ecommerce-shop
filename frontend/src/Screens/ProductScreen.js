import products from "../products";
import Rating from '../Components/Rating';

const ProductScreen = ({ match }) => {
  const product = products.find((item) => item._id === match.params.id);
    console.log(product.image);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={product.image} alt="..."></img>
        </div>
        <div className="col-6">
          <h1 className="display-4">{product.name}</h1>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <Rating rating={product.rating} reviews={product.numReviews} />
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
