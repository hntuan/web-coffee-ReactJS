import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/cart-item-1.png',
        name: 'Cart Items 01', 
        price: 15.99,
    },
    {
        img: './img/cart-item-2.png',
        name: 'Cart Items 02', 
        price: 15.99,
    },
    {
        img: './img/cart-item-3.png',
        name: 'Cart Items 03', 
        price: 15.99,
    },
    {
        img: './img/cart-item-4.png',
        name: 'Cart Items 04', 
        price: 15.99,
    },
    
];

var cartitem = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default cartitem;