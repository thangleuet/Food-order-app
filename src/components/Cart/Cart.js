import React ,{useContext} from 'react'
import CartContext from '../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItems = <ul className = {classes.items}> 
    {cartCtx.items.map((meal) =>
        <div>
        <li>{meal.name}: {meal.amount}</li> 
        </div> 
    )}</ul>
    return (
        <Modal onClose = {props.onClose}>
            {cartItems}
            <div className = {classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className = {classes.actions}>
                <button className ={classes['button--alt']} onClick = {props.onClose}>Close</button>
                <button className = {classes.button}>Ordering</button>
            </div>
            
        </Modal>
    )
}

export default Cart;
