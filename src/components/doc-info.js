import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faMapMarkerAlt,
  faPhoneAlt,
  faPaw,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { AddRemoteData } from './add.reservation';
class Docinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",

      doctor: {},
    };
  }
  async componentDidMount() {
    let { data } = await axios.get(
      `https://pet-care-iti.herokuapp.com/api/doctors/${this.props.match.params._id}`
    );

    this.setState({ doctor: data.data });
    // console.log(this.state.doctor._id)
    //  console.log(this.state.doctor.services)
  }

  star = {
    size: 30,
    count: 5,
    isHalf: true,
    value: 4,
    edit: false,
    color: "grey",
    activeColor: "#ffd700",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };

  render() {
    // console.log(JSON.parse(localStorage.getItem('doctor')).token)
    return (
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <div className="card p-4 mb-4 p-4">

              <div className="row">
                <div className="col-xs-5 ">
                  <img
                    className="doctor-img mr-3"
                    src="https://abingdonsquarevet.com/wp-content/uploads/2019/12/Dr-Brett-Shorenstein-web.png?x42674"
                    alt=""

                  />
                </div>

                <div className="col-xs-7 pl-4">
                  <h3>Dr/ {this.state.doctor.name}</h3>
                  <ul className="ml-4">
                    <li className="text-dark">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                      {this.state.doctor.address}
                    </li>
                    <li className="text-dark mt-3">
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                      {this.state.doctor.phone}
                    </li>
                    <li>
                      <div className="App">
                        <ReactStars {...this.star} />
                        <p className="text-dark" style={{ fontSize: "13px" }}>
                          Overall Rating from <strong> 384 </strong>Users
                  </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            
                <div className="row">
                  <h4 className="mt-4 text-center mx-auto">Gallery</h4>

                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="hospital-img d-block" src="https://thevettingzoo.com/wp-content/uploads/2015/11/reception-area.jpg" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="hospital-img d-block" src="https://centralveterinarycenter.com//img/tour/reception.jpg" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="hospital-img d-block" src="https://lh3.googleusercontent.com/proxy/WN30I62Dp1Q2XcnC5EDrSSyeWo2BXaPW8hlXujxYnfVUPm2R_-Rg5Ycj3dx_SXbT1YsU_F5Er_BAG2rO5GExsRLvFoeXpWtf56zEh6nGbH7kp-pUdiZZfm-kU-bPGkEviEfX80LZ" alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>        
                </div>
             
            </div>

            <div className="card px-4 mb-4 p-4 ">
              <h3>
                {" "}
                <FontAwesomeIcon icon={faInfo} />{" "}
                <span> &nbsp; About The Vet</span>{" "}
              </h3>

              <p style={{ color: "dimgrey" }}>
                {" "}
                <br /> Compassionate and competent certified Vet (CPCT/A) with 4+
              years of experience providing pets with top care . Assigned to
              assist 15+ pets per week, Germany AO.SPINE Member{" "}
              </p>
            </div>

            {" "}
            <div className="card px-4 mb-4 p-4 ">
              <h3>
                {" "}
                <FontAwesomeIcon icon={faPaw} />{" "}
                <span> &nbsp; Services</span>{" "}
              </h3>
              <h6>Pets: 🐶 😺 🦜</h6>
              <div className="text-dark col">


                <div className="text-dark  ">
                  <br />
                  {this.state.doctor.services && (
                    <div >
                      {this.state.doctor.services.map((service) => {
                        return (
                          <div className="m-3 d-flex flex-wrap" key={service._id}>
                            <img
                              src={`${service.image}`}
                              alt=""
                              style={{ height: "50px", width: "50px" }}
                            />
                            <p className="m-3 mt-2">{service.title} &nbsp;&nbsp; <span> <FontAwesomeIcon icon={faMoneyBillWave} /> 250 EGP</span></p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>


              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {" "}
            <div className="card text-center">

              <div className="px-3 mb-4 p-3" style={{ backgroundColor: "#555355" }} >
                <h2 className="text-white">Reservation</h2>
              </div>

              <h5>
                <FontAwesomeIcon icon={faMoneyBillWave} />{" "}
              Booking Fee 50 EGP
              </h5>

              <div id="schedule" className="m-3 p-3" >
                <AddRemoteData doctorId={this.state.doctor._id} doctorServices={this.state.doctor.services} />
              </div>

            </div>
          </div>


        </div></div>
    );
  }
}

export default Docinfo;
