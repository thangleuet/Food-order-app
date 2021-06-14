import React , {useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const numberOfCart = cartCtx.items.reduce((curNumber,item) =>{
        return curNumber + item.amount;
    },0)
    return (
        <button className = {classes.button} onClick ={props.onShowCart}>
            <span>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className = {classes.badge}>{numberOfCart}</span>
        </button>
    )
}

export default HeaderCartButton;
