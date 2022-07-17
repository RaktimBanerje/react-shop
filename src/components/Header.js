import React from 'react'

const Header = () => {

    React.useEffect(() => {
        var jsElm1 = document.createElement("script");
        jsElm1.type = "application/javascript";
        jsElm1.src = "/js/main.js";
        document.body.appendChild(jsElm1);
    }, [])

    return (
        <header className="header">
            <div className="top header__top gray-bg d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="message--header__top">
                                <p className="message m-0 dove__gray-color">Free Shipping Worldwide - On All Order Over $1000</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="menu--header__top text-right">
                                <nav className="nav--top__list">
                                    <ul className="list-inline">
                                        <li><a className="nav--top__link dove__gray-color text-capitalize position-relative" href="#">store Locator</a></li>
                                        <li><a className="nav--top__link dove__gray-color text-capitalize position-relative" href="#">Track Orders</a></li>
                                        <li><a className="nav--top__link dove__gray-color text-capitalize position-relative" href="#">Credit Card</a></li>
                                        <li className="nav--top__dropdown position-relative"><a className="nav--top__link lang--top__link dove__gray-color text-capitalize position-relative" href="#">English & Dollar<span className="lnr lnr-chevron-down"></span></a>
                                            <ul className="dropdown-show">
                                                <li><a className="dove__gray-color text-capitalize" href="#"><span className="lang">canada</span><span className="currency">USD</span></a></li>
                                                <li><a className="dove__gray-color text-capitalize" href="#"><span className="lang">Bangladesh</span><span className="currency">TAKA</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle header__middle bg--header__middle pt-35 pb-35 header-middle-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-md-4">
                            <div className="logo">
                                <a className="logo__link" href="index-2.html"><img src="/img/logo/h1__logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="main-menu main-menu2">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="dropdown-icon">
                                            <a href="index-2.html">Home</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index-2.html">Home Furniture</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Electronics</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home Fashion</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="cod__gray-color" href="shop.html">Offer Zone <span className="offer2">Hot</span></a></li>
                                        <li><a className="cod__gray-color" href="shop.html">Trending Item</a></li>
                                        <li><a className="cod__gray-color" href="shop.html">Gift Card <span className="offer2 new">New</span></a></li>

                                        <li className="dropdown-icon">
                                            <a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html">Blog Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">Product Details</a>
                                                </li>
                                                <li>
                                                    <a href="product-details2.html">Product Details</a>
                                                </li>
                                                <li>
                                                    <a href="registration.html">Register</a>
                                                </li>
                                                <li>
                                                    <a href="shop-cat-three.html">Shop Category 03</a>
                                                </li>
                                                <li>
                                                    <a href="shop-collection.html">Shop Category 01</a>
                                                </li>
                                                <li>
                                                    <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-8">
                            <div className="user-access2">
                                <ul className="list-inline">
                                    <li>
                                        <div className="user-access--box">
                                            <div className="user-access--icon">
                                                <span className="lnr lnr-phone-handset"></span>
                                            </div>
                                            <div className="user-access--content">
                                                <h5>Support</h5>
                                                <span>1800 5555 3636</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="user-access--box">
                                            <div className="user-access--icon">
                                                <span className="lnr lnr-user"></span>
                                            </div>
                                            <div className="user-access--content">
                                                <h5>Account</h5>
                                                <a>Login / Register</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom header__bottom grenadier-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 col-10">
                            <div className="dept__menu position-relative">
                                <nav>
                                    <ul className="dept__menu--list dept__menu--list2">
                                        <li><a className="dept__menu-mlink dept__menu-mlink2 f-900 cod__gray-color" href="#">Shop By Departments</a>
                                            <ul className="dept__menu--dropdown open">
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Lamps & Lighting</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Mattress & Bedding</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Home wares</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Housekeeping</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dept__menu--dlink" href="#">Showpiece & Wall Art</a></li>
                                                <li><a className="dept__menu--dlink" href="#">Dining & Cabinetry</a></li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Ceiling Light</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">Festive & Outdoor</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dept__menu--dlink" href="#">Comfoters & Sheets</a></li>
                                                <li><a className="dept__menu--dlink" href="#">Hardware & Software</a></li>
                                                <li><a className="dept__menu--dlink" href="#">Phone & Tablets</a></li>
                                                <li className="dropdown"><a className="dept__menu--dlink" href="#">View More Category</a>
                                                    <ul className="sub__menu sub__dept--menu">
                                                        <li><a href="#">Desktop</a></li>
                                                        <li className="dropdown"><a href="#">Laptop</a>
                                                            <ul className="sub__menu level2">
                                                                <li><a href="#">Desktop</a></li>
                                                                <li><a href="#">Laptop</a></li>
                                                                <li><a href="#">Mobile</a></li>
                                                                <li><a href="#">Tablet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Mobile</a></li>
                                                        <li><a href="#">Tablet</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 col-2 d-flex align-items-center">
                            <div className="search--header__middle h2search--header__middle d-none d-lg-block">
                                <form className="search--header__form position-relative" action="#">
                                    <div className="header--search__box">
                                        <input className="header--search__query" type="text"
                                            placeholder="Search For Products..." />
                                            <button className="header--search__btn"><i className="icofont-search-2"></i></button>
                                    </div>
                                    <div className="header--search__cate">
                                        <select name="header-search" id="header--search__main">
                                            <option value="1">All Categories</option>
                                            <option value="1">Lamps & Lighting</option>
                                            <option value="1">Mattress & Bedding</option>
                                            <option value="1">Housekeeping</option>
                                            <option value="1">Showpiece & Wall Art</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="cart--header__middle cart--header__two">
                                <div className="cart--header__list cart--header__list2 d-none d-xl-block">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fal fa-user-plus"></i></a></li>
                                        <li><a href="#"><i className="fal fa-heart"></i></a></li>
                                        <li><a className="mini__cart--link" href="#"><i className="fal fa-bags-shopping"><span
                                            className="cart__count">3</span></i><span className="cart__amount">$
                                                3550</span></a></li>
                                    </ul>
                                </div>
                                <div className="mini__cart--box">
                                    <ul>
                                        <li className="mb-20">
                                            <div className="cart-image">
                                                <a href="#"><img src="/img/allproducts/cart__thumb__1.jpg" alt="" /></a>
                                            </div>
                                            <div className="cart-text">
                                                <a href="#" className="title f-400 cod__black-color">Pink Jacket</a>
                                                <span className="cart-price f-400 dusty__gray-color">2 x <span className="price f-800 cod__black-color">$ 78.00</span></span>
                                            </div>
                                            <div className="del-button">
                                                <a href="#"><i className="icofont-close-line"></i></a>
                                            </div>
                                        </li>
                                        <li className="mb-20">
                                            <div className="cart-image">
                                                <a href="#"><img src="/img/allproducts/cart__thumb__2.jpg" alt="" /></a>
                                            </div>
                                            <div className="cart-text">
                                                <a href="#" className="title f-400 cod__black-color">Silk Glows</a>
                                                <span className="cart-price f-400 dusty__gray-color">2 x <span className="price f-800 cod__black-color">$ 78.00</span></span>
                                            </div>
                                            <div className="del-button">
                                                <a href="#"><i className="icofont-close-line"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="total-text d-flex justify-content-between">
                                                <span className="f-800 cod__black-color">Total Bag </span>
                                                <span className="f-800 cod__black-color">$ 99.00</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <a href="#" className="checkout">Checkout</a>
                                                <a href="#" className="viewcart">View Cart</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header