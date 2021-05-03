const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="/">
              Navbar
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/cart">
                    Cart
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signin">
                    Sign In
                  </a>
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
