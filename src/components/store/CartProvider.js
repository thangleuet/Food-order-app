import React , {useReducer} from "react";
import CartContext from './cart-context'

const defaultCartState = {
    items : [],
    totalAmount : 0
}
const CartReducer = (state , action) => {
    if (action.type === 'Add') {
        const updateTotals = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex((item) =>
            item.id === action.item.id
        )
        const existingCartItem = state.items[existingCartItemIndex]

        let updateItems;
        if (existingCartItem){
           const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updateItems = [...state.items]
            updateItems[existingCartItemIndex] = updateItem
        } else {
            
            updateItems = state.items.concat(action.item)
        }
        return {
            items : updateItems,
            totalAmount: updateTotals
        };
    }
    
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState , dispatch] = useReducer(CartReducer , defaultCartState)
    const addItemHandler = item => {
        dispatch({type: 'Add', item : item})
    };
    const removeItemHandler = id => {
        dispatch({type: 'Remove' , id : id})
    };

    const CartContextData = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemHandler,
        removeItems: removeItemHandler
    };

    return(
        <CartContext.Provider value = {CartContextData}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;