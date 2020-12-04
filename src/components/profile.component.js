import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    currentUser: AuthService.getCurrentUser()
    
    };
  }

  render() {
    const { currentUser } = this.state;
// console.log(currentUser)
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong className="text-info">{currentUser.data.name}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>User Token:</strong>{" "}
         {currentUser.token}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {currentUser.data.address}
          {console.log(currentUser.data.address)}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.data.email}
        </p>
   
      </div>
    );
}
}
