import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (  <nav className="navbar navbar-expand-lg navbar-dark bg">
      <div className="container">
    <Link className="navbar-brand mx-5" to="/"><img src={'./logo3.png'} alt=''
      style={{
        width:'30%',
        height:'20%'
      }}
      /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li> </ul>
      
    </div></div>
    </nav>
);
}
 
export default NavBar;