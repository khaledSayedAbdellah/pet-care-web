import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Settings = () => {
    const options = [
        { label: "HealthCare", value: "HealthCare" },
        { label: "Boarding", value: "Boarding" },
        { label: "Grooming", value: "Grooming" },
        { label: "Dog Walking", value: "Dog Walking" },
        { label: "Training", value: "Training" },
        { label: "Home Visit", value: "Home Visit" },
        { label: "Insect Control", value: "Insect Control" }
    ];

    const animatedComponents = makeAnimated();
    return (
        <div>

            <div className="pb-4 px-4">
                <h3 className="text-dark pb-4">Edit Information</h3>
                <form>
                    <div className="form-group d-flex pb-3 mb-5">
                        <label htmlFor="exampleFormControlFile1">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                                alt=""
                                style={{ hight: '100px', width: '100px' }} /></label>
                        <input type="file" className="form-control-file mt-auto" id="exampleFormControlFile1" />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" value="User Name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" value="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputEmail3" value="**********" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" value="Address" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" value="01011298034" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Services</label>
                        <div className="col-sm-10">
                            <Select
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                isMulti
                                placeholder={'Choose Services ...'}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="form-group d-flex pr-1 my-2">
                            <button type="submit" className="btn btn-outline-secondary px-4 ml-auto my-3 ">cancel</button>
                            <button type="submit" className="btn btn-secondary px-5 my-3 ml-3">Save</button>
                            
                      
                    </div>

                </form>


                {/* <div className="row">
                        <div className="form-group col-sm-6 p-2">
                            <label htmlFor="inputEmail3" className=" col-form-label">Email</label>
                            <div className="">
                                <input type="text" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                    </div> */}

                {/* <table className="table text-left w-100">
                    <tbody>
                        <tr>
                            <th scope="row">Email</th>
                            <td>email@email.com</td>
                            <td><FontAwesomeIcon icon={faEdit} /></td>

                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>Dr Name</td>
                            <td><FontAwesomeIcon icon={faEdit} /></td>

                        </tr>
                        <tr>
                            <th scope="row">Phone</th>
                            <td>+20 102-321-6543</td>

                            <td><FontAwesomeIcon icon={faEdit}/></td>

                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>Cairo</td>

                            <td><FontAwesomeIcon icon={faEdit}/></td>


                        </tr>
                        <tr>
                            <th scope="row">Change Password</th>
                            <td></td>
                            <td><FontAwesomeIcon icon={faEdit}/></td>

                        </tr>

                    </tbody>
                </table>
             */}
            </div>



        </div>

    );
}

export default Settings;