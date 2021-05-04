import Rating from '../Components/Rating';
import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductScreen = ({ match }) => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${match.params.id}`)
    .then(res => res.data)
    .then(data => setProduct(data));
  }, []);

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
