import Rating from "../Components/Rating";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../actions/productActions";

const ProductScreen = ({ match }) => {

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(productDetails(match.params.id));
  }, [dispatch, match.params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
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
  }
};

export default ProductScreen;
