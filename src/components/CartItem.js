import React, { Component } from 'react';

import { connect } from "react-redux";
class CartItem extends Component {
    render() {
        var ShowCartItem = this.props.cartitem.map((cart, index) => {
            return (
                <div key={index} className="cart-item">
                    <span className="fas fa-times" />
                    <img src={cart.img} />
                    <div className="content">
                        <h3>{cart.name}</h3>
                        <div className="price">${cart.price}/-</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="cart-items-container">

                {ShowCartItem}
                <a href="#" className="btn ">
                    Checkout Now
                </a>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartitem: state.cartitem,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
