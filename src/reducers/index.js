import { combineReducers } from "redux";
import cartitem from './cartitem';
import menu from './menu';
import product from './product';
import review from './review';
import blogs from './blogs';

const webReducers = combineReducers({ 
    cartitem: cartitem,
    menu: menu,
    product: product,
    review: review,
    blogs: blogs,
})

export default webReducers;