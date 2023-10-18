import { useContext } from "react"
import CartContext from "../Context/cart/CartContext"
import { Link } from "react-router-dom"
import "./All.css"
import data from "./data.js"
import Rating from "./Rating"

function Buying() {

    const { addtocart } = useContext(CartContext)
    return (
        <>
        <hr />
        <div className="main-body">
            {
            data ?
                data.map((item) => {
                    return (
                        <>
                            <div className="body">
                                <Link  to={`/buy/${item.id}`}>
                                    <p className="image"><img className="img" src={item.image} alt="item_image"/></p>
                                    <span> $: {item.price} /-</span>
                                     <Rating key = {item.id} rate = {item.rating.rate} />
                                    <br />
                                </Link>
                                <button className="add-to-cart" onClick={() => addtocart(item)}>Add to cart</button>
                            </div>
                        </>
                    )
                })
                :
                <></>
        }</div>
        </>
    )
}
export default Buying;