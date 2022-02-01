// CONFIG IMPORTS
import { Link, NavLink, useHistory } from 'react-router-dom';
import DarkModeButton from 'components/DarkModeButton/DarkModeButton';
// import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';


// ASSETS IMPORTS
import logo from 'assets/images/logo.png'


const Navigation = () => {

  return (
    <div className="navigation d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center mx-5">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink exact to="/">
          <img className="logo" src={logo} alt="Logo de mon portfolio"/>
          </NavLink>
          <NavLink exact to="/developpeur" activeClassName="nav-active" className="nav-link">
            Développeur
          </NavLink>
          <NavLink exact to="/business" activeClassName="nav-active" className="nav-link">
            Business
          </NavLink>
          <NavLink exact to="/mon-pitch" activeClassName="nav-active" className="nav-link">
            Mon pitch
          </NavLink>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end mx-5">
        <DarkModeButton />
      </div>
    </div>
  );
};



export default Navigation;

