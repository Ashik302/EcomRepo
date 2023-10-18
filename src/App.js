import './App.css';
import Buying from "./Component/Buying"
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import BuyItem from "./Component/BuyItem"
import Login from "./Component/Login"
import Sign_In from './Component/Sign_in';
import { useEffect, useState } from 'react';
import { auth } from "./Component/Firebase"
import CheckOut from './Component/CheckOut';
import MainNav from './Component/MainNav';
import Footer from"./Component/Footer";

function App() {
  const [userName, setUserName] = useState("");
  const [passName, setPassName] = useState("")
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if(user.emailVerified){
          setUserName(user)
        setPassName(user.displayName);
        }
        else{
          alert("check your email!!!!")
        }
        
      } else {
        setUserName(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userName]);

  return (
    <>
    <Router>
      <MainNav name = {passName} user = {userName}/>
      <Routes>
        <Route path="/" element={<Buying />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy/:id" element={<BuyItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_in" element={<Sign_In />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
