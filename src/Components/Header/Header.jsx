import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
  const currentURL = window.location.pathname 

  if(currentURL === "/") {
    return (
      <div className="header">
        <h1>HRnet</h1>
          <Nav />
      </div>
    );
  } else if(currentURL === "/employee-list"){
    return (
      <div className="header">
        <h1>Current Employees</h1>
      </div>
    );
  }
}

export default Header;