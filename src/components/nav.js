import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import AuthVetService from "../services/auth.doctor.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";





class NavBar extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.logOutVet = this.logOutVet.bind(this);

    this.state = {
      currentUser: undefined,
      currentVet: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const doctor = AuthVetService.getCurrentDoctor();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    if (doctor) {
      this.setState({
        currentVet: doctor,
      });
    }


  }
  logOut() {
    AuthService.logout();
  }
  logOutVet() {
    AuthVetService.logout();
  }
  render() {
    let { currentUser, currentVet } = this.state;
    const Show = () => {
      if (currentVet) {
        return (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/vet/settings"} className="nav-link">
                {currentVet.data.name}
              </Link>
            </li>
            <li className="nav-item borderRight">
              <a href="/" className="nav-link" onClick={this.logOutVet}>
                LogOut
              </a>
            </li>
          </div>
        )
      } else if (currentUser) {
        return (          
          <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <div className="dropdown show">
              
              <FontAwesomeIcon icon={faUserCircle} style={{fontSize:'28px'}} className="dropdown-toggle mt-2 mr-3" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
            

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">                
                
                <Link className="dropdown-item" to={"/profile/settings"}>Settings</Link>
                <Link className="dropdown-item" to={"/profile/reservations"}>Reservations</Link>
                <Link className="dropdown-item font-weight-bolder" to="/profile">Find Doctors!</Link>
                <hr/>
                <a className="dropdown-item text-center text-danger" href={"/"} onClick={this.logOut}>LogOut</a>
              </div>
            </div>
          </li>



            {/* <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.data.name}
              </Link>
            </li>
            <li className="nav-item borderRight">
              <a href="/" className="nav-link" onClick={this.logOut}>
                LogOut
            </a>
            </li> */}
          </div>
        )
      } else {
        return (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
            </Link>
            </li>

            <li className="nav-item borderRight">
              <Link to={"/register"} className="nav-link">
                Register
            </Link>
            </li>
          </div>
        )
      }
    }
    return (<nav className="navbar navbar-expand-lg navbar-dark bg shadow-sm" >
      <div className="container">
        <Link className="navbar-brand mx-5" to="/">
          <img 
          src="https://i.ibb.co/Chg25WH/logo3.png"
          // src={'./logo3.png'}
           alt='petCare logo'
        /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto">
            {Show()}
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Us
            </Link>
            </li>
            <li className="nav-item">
              <Link to={"/team"} className="nav-link">
                Our Team
            </Link>
            </li>

            <li className="nav-item ">
              <Link to={"/contact"} className="nav-link">
                Contact Us
          </Link>
            </li>
          </ul>

        </div></div>
    </nav>
    );
  }
}

export default NavBar;