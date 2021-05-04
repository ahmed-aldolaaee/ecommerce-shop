import {useState, useEffect} from 'react';
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import axios from 'axios';

const HomeScreen = ({ product }) => {
const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get('/api/products')
  .then(res => res.data)
  .then(data => setProducts(data));
}, []);

  const ProMap = products.map((product, ind) => {
    return (
      <div className="col-3 mb-3">
        <Link to={`/product/${product._id}`} className="cards">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <Rating rating={product.rating} reviews={product.numReviews} />
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </Link>
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
