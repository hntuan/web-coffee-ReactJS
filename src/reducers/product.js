import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/product-1.png',
        name: 'Fresh Coffee', 
        price: 15.99,
        price2: 20.99,
    
    },
    {
        img: './img/product-2.png',
        name: 'Fresh Coffee', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/product-3.png',
        name: 'Fresh Coffee', 
        price: 15.99,
        price2: 20.99,
    },
    
];

var product = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default product;