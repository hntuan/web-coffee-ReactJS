import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/menu-1.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/menu-2.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/menu-3.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/menu-4.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/menu-5.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    {
        img: './img/menu-6.png',
        name: 'Tasty and healty', 
        price: 15.99,
        price2: 20.99,
    },
    
];

var menu = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default menu;