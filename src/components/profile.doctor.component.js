import React, { Component } from "react";
import AuthVetService from "../services/auth.doctor.service";

export default class VetProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    currentVet: AuthVetService.getCurrentDoctor()
    
    };
  }

  render() {
    const { currentVet } = this.state;
  // console.log(currentVet)
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong className="text-info">{currentVet.data.name}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>User Token:</strong>{" "}
         {currentVet.token}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {currentVet.data.address}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentVet.data.email}
        </p>
   
      </div>
    );
}
}
