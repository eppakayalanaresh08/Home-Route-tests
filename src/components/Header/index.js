import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-website-container">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="list-nav-container">
        <li className="list-items">
          <Link to="/" className="link-nav">
            Home
          </Link>
        </li>
        <li className="list-items">Products</li>
        <li className="list-items">Cart</li>
      </ul>
      <button type="button" className="Logout-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
