import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faMapMarkerAlt,
  faPhoneAlt,
  faPaw,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import axios from "axios";
import ReactStars from "react-rating-stars-component";
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
  }

  star = {
    size: 40,
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
    return (
      <div className="row mt-5 ">
        <div style={{ marginLeft: "200px" }} className="col-md-5 ">
          <div className="card px-4 mb-4 p-4">
            <div className="d-flex d-inline ">
              <img
                className=" mr-3"
                src="https://abingdonsquarevet.com/wp-content/uploads/2019/12/Dr-Brett-Shorenstein-web.png?x42674"
                alt=""
                style={{ height: "300px", borderRadius: "50%" }}
              />
              <div className="row">
                <div className="ml-4 col" style={{ marginLeft: "20px" }}>
                  <h3 className="mt-1">
                    {" "}
                    <strong> Dr/ {this.state.doctor.name}</strong>
                  </h3>
                  <ul style={{ marginTop: "20px" }}>
                    <li className="text-dark">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                      {this.state.doctor.address}
                    </li>
                    <li className="text-dark mt-3">
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                      {this.state.doctor.phone}
                    </li>
                  </ul>
                </div>
                <div className="App mt-5">
                  <ReactStars {...this.star} />
                  <p className="text-dark" style={{ fontSize: "13px" }}>
                    Overall Rating from <strong> 384 </strong>Users
                  </p>
                </div>
                <img
                  src="https://pattendenvets.com/wp-content/uploads/2020/02/pattenden-vet-practice_marden-1500x938.jpg"
                  alt=""
                  style={{
                    height: "200px",
                    width:"350px",
                    borderRadius: "20%",
                    marginLeft: "150px",
                  }}
                />
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
          <div  className="card px-4 mb-4 p-4 ">
            <h3>
              {" "}
              <FontAwesomeIcon icon={faPaw} />{" "}
              <span> &nbsp; Services</span>{" "}
            </h3>
            <h5>Pets: 🐶 😺 🦜</h5>
            <div className="text-dark col">
            
           
            <div className="text-dark  ">
            <br/>
              {this.state.doctor.services && (
                <div style={{ marginLeft: "60px" }}>
                  {this.state.doctor.services.map((service) => {
                    return (
                      <div className="m-3 d-flex flex-wrap">
                        <img
                          src={`${service.image}`}
                          alt=""
                          style={{ height: "60px", width: "60px" }}
                        />
                        <p className="m-3 mt-2">{service.title} &nbsp;&nbsp; <span> <FontAwesomeIcon icon={faMoneyBillWave}/> 250 EGP</span></p> 
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
         

          </div>
        </div>
        </div>

        <div className="col-md-4 ">
          {" "}
          <div className="card ">
              <div className="px-3 mb-4 p-3" style={{backgroundColor:"#555355"}} > <h2 style={{color:"#FFF",textAlign:"center"}}>Reservation</h2></div>
            
              <h5 style={{textAlign:"center"}}>
              <FontAwesomeIcon icon={faMoneyBillWave} />{" "}
              Booking Fee 50 EGP</h5>
            
              <div  id="schedule" className="mt-3" >
  <ScheduleComponent height='450'>
        <Inject services={[Month,Day, Week, WorkWeek,  Agenda]}/>
    </ScheduleComponent>


  
    </div>

          </div>
        </div>


      </div>
    );
  }
}

export default Docinfo;
