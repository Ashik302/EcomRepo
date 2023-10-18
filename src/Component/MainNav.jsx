import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import CartContext from "../Context/cart/CartContext"
import { auth } from "./Firebase"
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import "./All.css"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function MainNav(props) {
    const navigator = useNavigate();
    const { totalItems } = useContext(CartContext)
    console.log(props.name)
    const handleLogout = () => {

        signOut(auth)
            .then(res => {
                console.log("log out sucessfully", res)
                navigator('/')
                console.log(props.user)
            })
    }
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link to="/"><Navbar.Brand> Home </Navbar.Brand></Link>
                <Link to="/cart">
                    <Navbar.Brand>
                        <li id="cart-nav"> <span className="fa-stack fa-2x has-badge" data-count={totalItems}>
                            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x fa-inverse" />
                            <FontAwesomeIcon icon={faShoppingCart} className="fa-stack-2x red-cart" />
                        </span>
                        </li>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {props.user ?
                            <div className='mee'>
                                <Navbar.Text>
                                    <center><FontAwesomeIcon className="usr" icon={faUser} /></center>
                                    <br /> {props.name}
                                </Navbar.Text>
                                <button className="button" style={{ height: '50px' , padding: "-5px"}} onClick={handleLogout}>Log Out</button>
                            </div>
                            : <>
                                <Link className="button1" to="/sign_in">Sign-up</Link >
                                <Link className="button" to="/login">Login</Link>
                            </>
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;