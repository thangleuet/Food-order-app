import React from 'react'

const CartContext =React.createContext({
    item: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItems: (id) => {}
})
export default CartContext;