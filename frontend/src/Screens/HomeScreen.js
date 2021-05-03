const HomeScreen = ({product}) => {

    const ProMap = product.map((product, ind) => {
        return(
            <div className="col-3 mb-3">
                <div className="card">
                    <img src={product.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.rating} stars from {product.numReviews} reviews</p>
                        <p className="card-text">${product.price}</p>
                        <a href="/" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>    
            );    
        });

    return(
        <div className="container">
            <div className="row">
                    {ProMap}
            </div>
        </div>
    );
}

export default HomeScreen;