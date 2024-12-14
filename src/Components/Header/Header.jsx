import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to="/About" className="nav-link px-2">About</Link></li>
            <li><Link to="/Contact" className="nav-link px-2">Contact</Link></li>
            
            <li><Link to="/Github" className="nav-link px-2">Github</Link></li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign-up</Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
