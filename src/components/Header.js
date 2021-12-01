import React, { Component } from 'react';
import CartItem from './CartItem';
class Header extends Component {

    onNavbar = () => {
        let navbar = document.querySelector('.navbar');
        let cartItem = document.querySelector('.cart-items-container');
        let searchForm = document.querySelector('.search-form');
        navbar.classList.toggle('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
    }

    onCart = () => {
        let navbar = document.querySelector('.navbar');
        let cartItem = document.querySelector('.cart-items-container');
        let searchForm = document.querySelector('.search-form');
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    onSearch = () => {
        let navbar = document.querySelector('.navbar');
        let cartItem = document.querySelector('.cart-items-container');
        let searchForm = document.querySelector('.search-form');
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }

    onScroll = () => {
        let navbar = document.querySelector('.navbar');
        let cartItem = document.querySelector('.cart-items-container');
        let searchForm = document.querySelector('.search-form');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
    }
    render() {
        return (
            <header className="header" onScroll={this.onScroll}>
                <a href="#" className="logo">
                    <img src="img/logo.png" />
                </a>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Products</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-search" id="search-btn" onClick={this.onSearch} />
                    <div className="fas fa-shopping-cart" id="cart-btn" onClick={this.onCart} />
                    <div className="fas fa-bars" id="menu-btn" onClick={this.onNavbar} />
                </div>
                <div className="search-form">
                    <input type="search" id="search-box" placeholder="Search here...." />
                    <label htmlFor="search-box" className="fas fa-search" />
                </div>

                <CartItem />
            </header>

        );
    }
}

export default Header;