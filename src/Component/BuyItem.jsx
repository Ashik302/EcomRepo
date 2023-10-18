import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import data from "./data"
import "./All.css"
import Rating from "./Rating"
import { useContext } from "react"
import CartContext from "../Context/cart/CartContext"

function BuyItem() {
    const { id } = useParams()
    const [dets, setDets] = useState(null)
    
    const { addtocart } = useContext(CartContext)

    const data1 = data.find((item) => item.id === id)
    useEffect(() => {
        setDets(data1)
    }, [data1])
    return (
        <>
            {dets ?
                <div className="product-container1">
                <div className="product-image1">
                    <img src={dets.image} alt="Product Image1"/>
                </div>
                <div className="product-details1">
                    <center><h1 className="product-title1">{dets.title}</h1></center>
                    <hr />
                    <p className="product-description">
                        {dets.description}
                    </p>
                    <hr />
                    <p className="product-price1">${dets.price}</p>
                    <hr />
                    <Rating key={dets.id} rate={dets.rating.rate}/>
                    <hr />
                    <button className="add-to-cart-button1" onClick={()=> addtocart(dets)}>Add to Cart</button>
                </div>
            </div>
                :
                <div className="spinner">
                    <h3><span className="visually-hidden">visuallyhidden</span></h3>
                </div>
            }
        </>
    )
}

export default BuyItem;