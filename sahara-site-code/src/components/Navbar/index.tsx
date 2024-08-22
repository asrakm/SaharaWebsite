import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/SaharaLogo.png";
import fbLogo from "../../assets/logos/Facebook_Logo_Primary.png";
import numLogo from "../../assets/logos/number.png";
import "./index.css";

// component will create the nav bar at the top of all pages for the site
const Navbar = () => {
  return (
    <div id="nav-container">
      <div id="SbhLogo">
        <a href="/">
          <img src={logo} alt="Sahara Banquet Hall" id="logoImg" />
        </a>
      </div>
      <div id="NavMenu">
        <div>
          <NavLink to="/" className="nav-links" id="navLink1">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/gallery" className="nav-links">
            Gallery
          </NavLink>
        </div>
        <div>
          <NavLink to="/contactUs" className="nav-links">
            Contact Us
          </NavLink>
        </div>
        {/*<div>
          <a href="tel:+14803929479">
            <img src={numLogo} id="phoneNumber" alt="logo" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/saharabanquethall/">
            <img src={fbLogo} id="fbLink" alt="logo" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
