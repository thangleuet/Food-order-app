import React from 'react'
import image from '../../Image-meal/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <div>
                <header className={classes.header}>
                    <h1>React Meals</h1>
                    <HeaderCartButton onShowCart = {props.onShowCart}/>
                </header>
                <div className={classes.mainimage}>
                    <img src={image} alt="Table is full delicious foods"/>
                </div> 
        </div>
    )
}

export default Header
