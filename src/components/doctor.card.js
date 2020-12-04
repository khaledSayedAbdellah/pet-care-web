
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faDollarSign, faMapMarkerAlt, faPaw,  faPhoneAlt, faStar} from '@fortawesome/free-solid-svg-icons'
const Card =({doctor})=>(
    <div className="card m-2">
        <div className="media">
            <img src="https://i0.wp.com/iphoneislam.com/wp-content/uploads/2019/01/profile-pic-editor-stylish.png?resize=246%2C246&ssl=1" className="align-self-start mr-3" alt="" style={{height:'150px'}}/>
            <div className="media-body">
                    <h5 className="mt-4"> Dr/ {doctor.name}</h5>
                <ul>
                <li className="text-dark">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/>
                {doctor.address}
                </li>
                <li className="text-dark mt-2">
                <FontAwesomeIcon icon={faDollarSign} className="mr-2"/>
                250 L.E
                </li>
                <li className="text-dark mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
                {doctor.phone}
                </li>
                <li className="text-dark mt-2">
                <FontAwesomeIcon icon={faPaw} className="mr-2"/>
                <strong> Available Services</strong>
                    <ul className="text-dark">
                    <li>
                    Health Care
                    </li>
                    <li>
                    Boarding
                    </li>
                    <li>
                    Insect Control
                    </li>
                    </ul>
                </li>
                
                <li className="text-warning mt-3">
                <FontAwesomeIcon icon={faStar} className="mr-2"/>
                <FontAwesomeIcon icon={faStar} className="mr-2"/>
                <FontAwesomeIcon icon={faStar} className="mr-2"/>
                <FontAwesomeIcon icon={faStar} className="mr-2"/>
                <FontAwesomeIcon icon={faStar} className="mr-2"/>
                
                </li>
                </ul>
            
            </div>
        </div>
    </div>)
    

export default Card;