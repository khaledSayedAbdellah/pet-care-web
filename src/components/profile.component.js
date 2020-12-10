import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Home from './home.component';

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
        
          <h3 className="text-center py-2">
            <strong>Welcome {currentUser.data.name}!</strong> 
          </h3>
        <Home/>
        {/* <p>
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
        </p> */}
   
      </div>
    );
}
}
