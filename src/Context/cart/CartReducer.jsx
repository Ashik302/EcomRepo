import { ADD_TO_CART, REMOVE_ITEM, INCREMENT, DECREMENT, CART_TOTAL_ITEM, CART_TOTAL_ITEM_PRICE } from "../Type"

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }
        }
        case INCREMENT: {
            let update = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return { ...state, cartItems: update }
        }
        case DECREMENT: {
            let update = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return null
                    }
                }
                return item
            })
                .filter((item) => item !== null)
            return { ...state, cartItems: update }
        }

        case CART_TOTAL_ITEM:{
           let updateItem = state.cartItems.reduce((initVal, currEle)=>{
            let {quantity} = currEle

            initVal = initVal + quantity
            return initVal
           }, 0)
           return {
            ...state, totalItems: updateItem,
           }
        }

        case CART_TOTAL_ITEM_PRICE: {
            let updatePrice = state.cartItems.reduce((initval, currElem) => {
                let {quantity} = currElem;
                let amount = quantity * currElem.price

                initval = initval + amount
                return initval
            }, 0)
            return {...state, totalAmount: updatePrice}
        }
        default:
            return state
    }
}

export default CartReducer