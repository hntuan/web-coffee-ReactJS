import React, { Component } from 'react';
import { connect } from "react-redux";
class Product extends Component {
    render() {
        var showProduct = this.props.product.map((product, index) => {
            return (
                <div key={index} className="box">
                        <div className="icons">
                            <a href="#" className="fas fa-shopping-cart" />
                            <a href="#" className="fas fa-heart" />
                            <a href="#" className="fas fa-eye" />
                        </div>
                        <div className="image">
                            <img src={product.img} />
                        </div>
                        <div className="content">
                            <h3>{product.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                            <div className="price">
                                ${product.price} <span>${product.price2}</span>
                            </div>
                        </div>
                    </div>
            )
        })
        return (
            <section className="products" id="products">
                <h1 className="heading">
                    {" "}
                    Our <span>Products</span>{" "}
                </h1>
                <div className="box-container">
                    {showProduct}
                    
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);