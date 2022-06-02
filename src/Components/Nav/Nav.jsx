import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  const currentURL = window.location.pathname 

  return (
    <div className="nav">
      {currentURL === "/" && <Link className="main-nav-item" to="/employee-list">View Current Employee</Link>}
      {currentURL === "/employee-list" && <Link className="main-nav-item" to="/">Home</Link>}
    </div>
  );
}

export default Nav;