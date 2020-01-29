import React from 'react';
import { Link } from 'react-router-dom';

import './index.style.scss';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" href="/">Shopy</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Products
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
