import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar as faSolidStar,
    faStarHalfAlt as faHalfStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const Rating = (props) => {
    return(
    <span className="stars">
        {
            Array.from({ length: 5 }, (elem, index) => {
                let number = index + 0.5;
                return props.rate >= index + 1 ? (
                    <FontAwesomeIcon className="star" icon={faSolidStar} key={index} />
                ) : props.rate >= number ? (
                    <FontAwesomeIcon className="star" icon={faHalfStar} key={index} />
                ) : (
                    <FontAwesomeIcon className="star" icon={faRegularStar} key={index} />
                );
            })
        }
    </span>
    )
}

export default Rating;