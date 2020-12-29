import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";



const API_URL = 'https://pet-care-iti.herokuapp.com/api/reservations';
class Reservations extends Component {
    constructor(props) {
        super(props)
        this.state = { schedule: [] }


    }
    async componentDidMount() {
        let { data } = await axios.get(API_URL, { headers: { "Authorization": this.props.UserToken } })
        // console.log(data.data)
        // let result=[]; 
        // data.data.forEach((r)=>{
        //   let dt = new Date(r.date);
        //   result.push({id:r.id,name:r.user.name,date:r.date,endDate:new Date(dt.setHours( dt.getHours()+1 )),address:r.user.address,title: r.services.map((elem)=>{return elem.title}).join(" , ")})
        //   }
        // )
        this.setState({ schedule: data.data })

    };



    renderSchedule() {
        if (this.state.schedule.length > 0) {
            return this.state.schedule.map((reservation) => {
                console.log(reservation.doctor)
                return (<div className="col-lg-4">
                    <div className="card text-center my-3 " key={reservation.id}>
                        <div className="card-header">
                            <FontAwesomeIcon icon={faUser} className="text-color pr-1" /> {reservation.user.name ? reservation.user.name : 'Doctor Name'}
                        </div>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-color d-inline mr-2" />    
                            <h5 className="card-title mb-5">{reservation.user.address?reservation.user.address:'address'}</h5>
                            { reservation.services.length>0 ? <p className="card-text"><strong> Services :</strong><br />
                                
                                {reservation.services.map((ser) => {
                                    return <span key={ser._id} className="d-block">{ser.title}</span>
                                })}<br /></p> : ''
                                
                                
                            }

                            <a href="#" className="btn btn-info w-50">Edit</a>
                        </div>
                        <div className="card-footer text-muted" style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            {reservation.date}
                        </div>

                        {/* <h3>{reservation.user.name}</h3>
                        <h3>{reservation.date}</h3>
                        <h3>{reservation.user.address}</h3>
                        <h3>{reservation.services.map((ser) => {
                            return <span key={ser._id}>{ser.title}</span>
                        })}</h3> */}




                    </div>

                </div>

                )
            })
        } else {
            return 'no reservations'
        }
    }




    render() {
        console.log(this.props.UserToken)
        return (<div className="container my-5">
            <div className="row d-flex flex-wrap">

                {this.renderSchedule()}</div>


        </div>);
    }
}

export default Reservations;