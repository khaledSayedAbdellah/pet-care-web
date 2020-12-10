
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faClipboardList, faSearch, faUserMd } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const MainHome = () => {


    const options = [
        { label: "Cairo", value: "Cairo" },
        { label: "Mansoura", value: "Mansoura" },
        { label: "Alex", value: "Alex" },
        { label: "Luxor", value: "Luxor" },
        { label: "Aswan", value: "Aswan" },
        { label: "Giza", value: "Giza" },
        { label: "Sharm El-Sheikh", value: "Sharm El-Sheikh" },
        { label: "Port Said", value: "Port Said" },
        { label: "Minya", value: "Minya" },
        { label: "Ismailia", value: "Ismailia" },
        { label: "Asyut", value: "Asyut" },
        { label: "Suez", value: "Suez" },
        { label: "Tanta", value: "Tanta" },
    ];


    const animatedComponents = makeAnimated();



    return (<div className="main-home">
        <header>

        </header>
        <section className="search container text-dark ">
           <div className="row">
           
                <div className="select-container m-5 col">
                    <Select
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        isMulti
                        placeholder={'Choose City ...'}
                        options={options}
                    />
                </div>
{/*                 
                <div className="col form-group mt-5">
                    <input 
                    type="text"
                    className="form-control py-3"
                    placeholder="Search by Doctor Name ..."        
                    />
                </div> */}
          </div> 
        </section>
        
   <section className="use-website container text-center mt-2">
       <h2 className="m-4">How To Use Pet Care</h2>
                <div className="row my-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faSearch} />

                        </div>
                        <div>
                            <h5>Choose Your Location</h5>
                            <p className="text-muted">
                            Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faUserMd} />

                        </div>
                        <div >
                            <h5>Check Vets Information</h5>
                            <p className="text-muted">
                            Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faClipboardList} />

                        </div>
                        <div >
                            <h5>Make a Reservation</h5>
                            <p className="text-muted">
                            Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column">
                        <div className="icon-home">
                            <FontAwesomeIcon icon={faCalendarCheck} />

                        </div>
                        <div >
                            <h5>Track Your Appointment</h5>
                            <p className="text-muted">
                            Lorem ipsum is placeholder text commonly used in the graphic, print
                            </p>
                        </div>
                    </div>
                    
                </div>


              
   </section>
    
    
    </div>);
}

export default MainHome;