import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import {
  faMapMarkerAlt,
  faPaw,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

// const star = {
//     size: 20,
//     count: 5,
//     color: "black",
//     activeColor: "#ffd700",
//    value: from backend,
//    edit: false,
//     isHalf: true,
//     emptyIcon: <i className="far fa-star" />,
//     halfIcon: <i className="fa fa-star-half-alt" />,
//     filledIcon: <i className="fa fa-star" />,
//     onChange: (newValue) => {
//       console.log(`Example 2: new value is ${newValue}`);
//     }
//   };

// const availServices = doctor.services

let raters = Math.floor((Math.random() * 300) + 1);



const star = {
  size: 40,
  count: 5,
  isHalf: true,
  value: 4,
  color: "grey",
  activeColor: "#ffd700",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};



const Card = ({ doctor }) =>
  doctor.services.length > 0 ? (
    <div className="docCard">
    <Link  to={`/docInfo/${doctor._id}`}>
    <div className="card ml-2 px-4 mb-4 p-4  ">
      <div className="">
        <div className="d-flex d-inline ">
          <img
            className="alignself-start mr-3"
            src="https://abingdonsquarevet.com/wp-content/uploads/2019/12/Dr-Brett-Shorenstein-web.png?x42674"
            alt=""
            style={{ height: "180px", borderRadius: "50%" }}
          />
          <div className="row">
            <div className="ml-4 col" style={{ marginLeft: "20px" }}>
              <h5 className="mt-1">
                {" "}
                <strong> Dr/ {doctor.name}</strong>
              </h5>
              <ul style={{ marginTop: "20px" }}>
                <li className="text-dark">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {doctor.address}
                </li>
                <li className="text-dark mt-3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                  {doctor.phone}
                </li>

                <div className="App mt-4">
                  <ReactStars {...star} />
                  <p className="text-dark" style={{ fontSize: "13px" }}>
                    Overall Rating from <strong>{raters} </strong>Users
                  </p>
                </div>
              </ul>
            </div>
          </div>

          <div className="text-dark col">
            <span>
              {" "}
              <strong style={{ marginLeft: "30px" }}>
                <FontAwesomeIcon icon={faPaw} className="mr-2 mt-5" />
                Services
              </strong>
            </span>
            <div className="text-dark  ">
              {doctor.services && (
                <div style={{ marginLeft: "30px" }}>
                  {doctor.services.map((service) => {
                    return (
                      <div className="m-3 d-flex flex-wrap">
                        <img
                          src={`${service.image}`}
                          alt=""
                          style={{ height: "30px", width: "30px" }}
                        />
                        <p className="m-2 ">{service.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          
        </div>
      </div>
    </div>
    </Link>
    </div>
  ) : (
    ""
  );

export default Card;
