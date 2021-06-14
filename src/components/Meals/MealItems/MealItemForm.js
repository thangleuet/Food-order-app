import React , {useRef , useState} from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const AmountInputRef = useRef()
    const [amountIsValid , setAmountIsValid] = useState(true)

    const SubmitHandler = (event) => {
       
        event.preventDefault();
        const enterAmount = AmountInputRef.current.value;
        const enterAmountNumber = + enterAmount;
        
        if (enterAmount.trim().length === 0 || enterAmountNumber <1 || enterAmountNumber>5)
            {
                setAmountIsValid(false);
                return;
            }
        props.onAddToCart(enterAmountNumber)
    }
    return (
        <form className = {classes.form} onSubmit = {SubmitHandler}>
            <Input 
                ref= {AmountInputRef}
                label ="Amount" input = {{
                id: "amount_" + props.id,
                type: "number",
                min : 1,
                step : 1,
                max : 5,
                value: "1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount !!!</p>}
        </form>
    )
}

export default MealItemForm;
