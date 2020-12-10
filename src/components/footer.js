import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (  <div className="justify-content-end"> <footer className="bg-dark">
    <div className=" navbar-expand-lg navbar-dark bg">
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
  

    </div>
    </div>


  </footer></div>
);
}
 
export default Footer;