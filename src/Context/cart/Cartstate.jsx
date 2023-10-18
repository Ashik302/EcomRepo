import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
    ADD_TO_CART,
    REMOVE_ITEM, INCREMENT,
    DECREMENT, CART_TOTAL_ITEM,
    CART_TOTAL_ITEM_PRICE
} from "../Type";
import {
    useEffect,
    useReducer,
} from "react";
import { auth } from '../../Component/Firebase'; // Adjust the import path accordingly

const CartState = ({ children }) => {



    const getItem = () => {
        let newData = localStorage.getItem("my-cart");
        if (newData) {
            try {
                return JSON.parse(newData);
            } catch (error) {
                console.log("error while passing through local storage")
                return []
            }
        }
        else {
            return [];
        }
    }

    const initialState = {
        cartItems: getItem(),
        totalItems: " ",
        totalAmount: " ",
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);




    const addtocart = (item) => {
        if (state.cartItems.find((ite) => ite.id === item.id)) {
            // Item already exists in the cart
            // Handle this case if needed
        } else {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    if (user.emailVerified) {
                        console.log(user.uid, 'FROM CARTSTATE');
                        dispatch({ type: ADD_TO_CART, payload: item });

                    } else {
                        alert('Your email has not been verified yet!!!!');
                    }
                }
            });
        }
    };

    const removeitem = async (id) => {
        console.log('Removing item with id:', id);

        if (typeof id === 'string') {
            console.error('Invalid ID:', id);
            return;
        }
        dispatch({ type: REMOVE_ITEM, payload: id });
    };

    const increment = (id) => {
        dispatch({ type: INCREMENT, payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: DECREMENT, payload: id })
    }


    useEffect(() => {
        dispatch({ type: CART_TOTAL_ITEM })
        dispatch({ type: CART_TOTAL_ITEM_PRICE })
        localStorage.setItem("my-cart", JSON.stringify(state.cartItems));
    }, [state.cartItems]);
    return (
        <CartContext.Provider
            value={{
                cartItems: state.cartItems,
                totalItems: state.totalItems,
                totalAmount: state.totalAmount,
                addtocart,
                removeitem,
                increment,
                decrement,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartState;