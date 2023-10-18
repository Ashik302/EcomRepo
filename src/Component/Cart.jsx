import { useContext } from "react";
import CartContext from "../Context/cart/CartContext";
import "./All.css";
import { Link } from "react-router-dom"

function Cart() {
    const { cartItems, removeitem, increment, decrement, totalAmount } = useContext(
        CartContext
    );

    return (
        <>
            <div className="main-con">
                <h1 className="shp-heading">Shopping Cart</h1>
                <h5 className="total">Your Total: $ {totalAmount}</h5>
                <Link to="/checkout">
                    <button className="checkout">CheckOut</button>
                    
                </Link>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div className="product-container" key={item.id}>
                        <p className="image-cart">
                            <img className="img-cart" src={item.image} alt={item.title} />
                        </p>
                        <span className="product-info">
                            <h5>{item.title}</h5>
                        </span>
                        <div className="inn">
                            <button className="in-de" onClick={() => decrement(item.id)}>
                                -
                            </button>
                            <input className="total-itm" value={item.quantity} readOnly />
                            <button className="in-de" onClick={() => increment(item.id)}>
                                +
                            </button>
                        </div>
                        <button className="rev-btn" onClick={() => removeitem(item.id)}>
                            Remove
                        </button>
                        <h5 className="cart-price">$ {item.price}</h5>
                    </div>
                ))
            ) : (
                <center>

                    <h1>Your cart is empty </h1>
                </center>
            )}
        </>
    );
}

export default Cart;
