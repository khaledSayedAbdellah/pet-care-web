import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


class Services extends Component {

  constructor(props) {
    
    super(props);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.state = {
      services: [],
      price:'',
    }
  }
  async componentDidMount() {
    let { data } = await axios.get(
      "https://pet-care-iti.herokuapp.com/api/services"
    );

    this.setState({ services: data.data });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  handleEdit(e) {
    e.preventDefault();
    console.lo(e);
    this.setState({price:e.target.value})
  }

  render() {
    
    return (
      <div>
        <h2 className="text-dark pl-4">Services</h2>
        {/* <button className="btn btn-outline-dark px-5">Add</button> */}
        <table className="table text-center my-5 px-5">
          <thead>
            <tr>
              <th scope="col" className="text-left">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            {this.state.services.map((service) => {
              return (<tr key={service._id}>
                <th scope="row" className="text-left ">{service.title}</th>
                <td>
                {`${this.state.price}` ? `${this.state.price} L.E`:'250L.E'} <FontAwesomeIcon icon={faEdit} className="mr-2" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"/>

                  <div className="modal fade" id="exampleModal" tablndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Edit Price</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={this.handleEdit}>
                            <div className="form-group">
                              <label htmlFor={service._id} className="col-form-label"></label>
                              <input 
                              type="text" 
                              className="form-control" 
                              id={service._id} 
                              name="price"
                              value={this.state.price}
                              onChange={this.onChangePrice}/>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-outline-secondary px-4 my-3 " data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-secondary px-5 my-3 ml-3">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>)
            })}






          </tbody>
        </table>
      </div>
    );
  };
}
export default Services;
