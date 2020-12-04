import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.js'
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import "./App.css";

import AuthService from "./services/auth.service";
import AuthVetService from "./services/auth.doctor.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
import RegisterVet from './components/register.component.doctor';
import LoginVet from './components/login.component.doctor';
import VetProfile from './components/profile.doctor.component';



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg">
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
          
        </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/doctor" component={LoginVet} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/doctor" component={RegisterVet} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/doctor" component={VetProfile} />
            {/* <Route path="/user" component={BoardUser} /> */}
          </Switch>
        </div>

        <footer className="bg-dark navbar-expand-lg navbar-dark bg" 
        // style={{height:'100px'}}
        >
          <div className="row">
          <div className="col-1"></div>
            <div className="col-6 text-white pl-5">
              <h5 className="py-2 text-left">Important links</h5>
            <ul className=" text-left mt-1">
              <li>
                <Link to="#">Home page</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>

            </div>
            <div  className="col-5 text-left mt-1 dFlex">
            <button className="btn btnLight text-dark"><Link to="/register/doctor" >Register as a Vet</Link ></button>
            </div>

          </div>
          










        </footer>

   

   
      </div>
    );
  }
}

export default App;
