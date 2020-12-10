import React, { Component } from "react";
import AuthVetService from "../services/auth.doctor.service";
import { Link, Route } from "react-router-dom";
import Settings from "./setting.doctor";

import Services from './services.doctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCog, faPaw } from '@fortawesome/free-solid-svg-icons'
import Schedule from './schedule.doctor';

export default class VetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVet: AuthVetService.getCurrentDoctor()
    };
  }

  render() {
    const { currentVet } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-4 d-flex flex-column align-items-center py-5 align-self-start">
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                alt=""
                style={{ hight: '150px', width: '150px' }}
              />
              <h4 className="mt-2 mb-5 text-left">Vet/{currentVet.data.name}</h4>
              {/* <h5 className="mb-3"> {currentVet.data.email}</h5> */}
              <ul className="nav d-flex flex-column align-content-between m-auto doctor-ul">
                <li className="nav-item w-100 align-self-center">
                  <Link to="/profile/doctor/settings" className="row nav-link d-flex">
                    <FontAwesomeIcon icon={faCog} className="m-1 mr-3" />
                    <p>Settings</p>
                  </Link>
                </li>
                <li className="nav-item align-content-between">
                  <Link to="/profile/doctor/schedule" className="row nav-link d-flex">
                    <FontAwesomeIcon icon={faCalendarAlt} className="m-1 mr-3" />
                    <p>Schedule</p>
                  </Link>
                </li>
                <li className="nav-item align-content-between">
                  <Link to="/profile/doctor/services" className="row nav-link d-flex">

                    <FontAwesomeIcon icon={faPaw} className="m-1 mr-3" />
                    <p>Services</p>


                  </Link>
                </li>
              </ul>
            </div>
            <div className="col border">
              <h3 className="text-center py-4 mb-3">Doctor Dashboard</h3>

              <Route path="/profile/doctor/settings" component={Settings} />
              <Route path="/profile/doctor/schedule" component={Schedule} />
              <Route path="/profile/doctor/services" component={Services} />
            </div>
          </div>
        </div>
      </React.Fragment>

      // <div className="container">
      //   <header className="jumbotron">
      //     <h3>
      //       <strong className="text-info">{currentVet.data.name}</strong> Profile
      //     </h3>
      //   </header>
      //   <p>
      //     <strong>User Token:</strong>{" "}
      //    {currentVet.token}
      //   </p>
      //   <p>
      //     <strong>Address:</strong>{" "}
      //     {currentVet.data.address}
      //   </p>
      //   <p>
      //     <strong>Email:</strong>{" "}
      //     {currentVet.data.email}
      //   </p>

      // </div>
    );
  }
}
