// CONFIG IMPORTS
import { Link, NavLink, useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';


// ASSETS IMPORTS
import logo from 'assets/images/logo.png'


const Navigation = () => {

  return (
    <div className="navigation align-items-center justify-content-between">
      <div className="d-flex justify-content-between align-items-center">
        <img className="logo" src={logo} alt="Logo de mon portfolio"/>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink exact to="/" activeClassName="nav-active" className="nav-link">
            Accueil
          </NavLink>
          <NavLink exact to="/developpeur" activeClassName="nav-active" className="nav-link">
            Développeur
          </NavLink>
          <NavLink exact to="/commercial" activeClassName="nav-active" className="nav-link">
            Développeur
          </NavLink>
          <NavLink exact to="/mon-pitch" activeClassName="nav-active" className="nav-link">
            Mon pitch
          </NavLink>
        </div>
      </div>
      <div className="d-flex">
      </div>
    </div>
  );
};



export default Navigation;

