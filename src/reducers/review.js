import * as types from '../constants/ActionTypes';

var initialState = [
    {
        img1: './img/quote-img.png',
        img2: './img/pic-1.png',
        name: 'John Smith',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio assumenda maxime, in quis error unde perspiciatis atque quasi nihil deleniti cumque natus placeat quae pariatur doloribus, nulla fugit hic nostrum.',
    },
    {
        img1: './img/quote-img.png',
        img2: './img/pic-2.png',
        name: 'John Smith',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio assumenda maxime, in quis error unde perspiciatis atque quasi nihil deleniti cumque natus placeat quae pariatur doloribus, nulla fugit hic nostrum.',
    },
    {
        img1: './img/quote-img.png',
        img2: './img/pic-3.png',
        name: 'John Smith',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio assumenda maxime, in quis error unde perspiciatis atque quasi nihil deleniti cumque natus placeat quae pariatur doloribus, nulla fugit hic nostrum.',
    },
];

var review = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default review;