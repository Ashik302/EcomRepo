import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../Context/cart/CartContext';
import "./All.css"
import { useNavigate } from 'react-router-dom';
import { auth, fireStoor} from "./Firebase"
import { collection, addDoc } from 'firebase/firestore';

function CheckOut() {

  const { totalItems, totalAmount, cartItems } = useContext(CartContext)
  const [mail, setMail] = useState("")
  const [mobile, setMobile] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const navigate = useNavigate()

  useEffect(()=> {
    const check = auth.onAuthStateChanged((user) => {
  
      if (user.emailVerified) {
        setMail(user.email)
      }
      else {
        alert("your email haven't verified yet")
      }
    })
    
    return () =>{
      check();
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order...");
  
    const orderData = {
      Orders: cartItems,
      Mobile_number: mobile,
      Address1: address1,
      Address2: address2,
    };
  
    try {
      const docRef = await addDoc(collection(fireStoor, "Orders"), orderData);
      console.log("Order data added successfully with document ID:", docRef.id);
    } catch (error) {
      console.error("Error adding order data:", error);
    }
  
    navigate("/");
    alert("your order have been placed!")
  }
  
 
  return (
    <Form className='form-checkout' onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={mail} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" required onChange={(e)=> setAddress1(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" required onChange={(e)=> setAddress2(e.target.value)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control  required onChange={(e)=> setMobile(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Total Items:</Form.Label>
          <Form.Control value={totalItems} />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Total Amount:</Form.Label>
          <Form.Control value={`Rs: ${totalAmount}`} />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CheckOut;