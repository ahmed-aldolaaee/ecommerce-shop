import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container-fluid mb-3 p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              ECommerce Shop
            </Link>
            <div className="" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
