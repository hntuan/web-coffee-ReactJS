import React, { Component } from 'react';
import { connect } from "react-redux";

class Menu extends Component {
    render() {
        var showMenu = this.props.menu.map((item, index) => {
            return (
                <div key={index} className="box">
                        <img src={item.img} />
                        <h3>{item.name}</h3>
                        <div className="price">
                            ${item.price} <span>{item.price2}</span>
                        </div>
                        <a href="#" className="btn">
                            Add to cart
                        </a>
                    </div>
            )
        })
        return (
            <section className="menu" id="menu">
                <h1 className="heading">
                    {" "}
                    Our <span>Menu</span>{" "}
                </h1>
                <div className="box-container">
                    {showMenu}
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);