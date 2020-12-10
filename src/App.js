import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
import NavBar from "./components/nav";
import Footer from "./components/footer";
import MainHome from './components/main-home';
import Docinfo from './components/doc-info';





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
      <div className="app-container">
        <div className="content-wrap">
          <NavBar />

          <div className="">
            <Switch>
              
              <Route exact path="/doctors" component={Home}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/login/doctor" component={LoginVet} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/register/doctor" component={RegisterVet} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/profile/doctor" component={VetProfile} />
              <Route exact path={["/", "/home"]} component={MainHome} />
              <Route path="/docInfo/:_id" component={Docinfo} />
              {/* <Route path="/user" component={BoardUser} /> */}
            </Switch>
          </div>
        </div>
       
        <Footer />


      </div>
    );
  }
}

export default App;
