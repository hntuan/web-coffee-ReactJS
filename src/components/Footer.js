import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="footer" id="footer">
                <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-linkedin" />
                    <a href="#" className="fab fa-pinterest" />
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Products</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </div>
                <div className="credit">
                    Created by <span>Mr. Web designer</span> | all rights reserved
                </div>
            </section>
        );
    }
}

export default Footer;