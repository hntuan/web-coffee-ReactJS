import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/blog-1.jpeg',
        title: ' Tasty and refreshing coffee', 
        time: 'By admin / 09st nov, 2021',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam?',
    },
    {
        img: './img/blog-2.jpeg',
        title: ' Tasty and refreshing coffee', 
        time: 'By admin / 09st nov, 2021',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam?',
    },
    {
        img: './img/blog-3.jpeg',
        title: ' Tasty and refreshing coffee', 
        time: 'By admin / 09st nov, 2021',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam?',
    },
    
];

var blogs = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default blogs;