import React , {useContext} from 'react'
import classes from './MealItems.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

const MealItems = (props) => {
    const cartCtx =useContext(CartContext)
    const price = `$${props.price}`
    const AddToCartHandler = (amount) => {
        cartCtx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <div className = {classes.description}>{props.description}</div>
            <div className = {classes.price}>{price}</div>
            <div>
                <MealItemForm onAddToCart= {AddToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItems;
