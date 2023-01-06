import React, { useState } from 'react';
import shockLogo from '../../assets/logo/shockLogo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavResponsive, setNavbarResponsive] = useState(false);
    const handlerNav = () => {
        setNavbarResponsive(!isNavResponsive);
    };
    return (
        <nav className={`${isNavResponsive ? 'bg-black' : 'bg-transparent'} navbar navbar__header navbar-expand-lg navbar-light px-sm-4 py-sm-4 position-absolute`}>
            <button onClick={handlerNav} className="navbar-toggler navbar-toggler__custom" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">
                <img src={shockLogo} alt="" />
            </Link>
            <div className={`${isNavResponsive ? 'nav__show' : 'nav__hide'} navbar-collapse justify-content-center `} id="navbarTogglerDemo03">
                <ul className="navbar-nav navbar__nav__custom mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={`nav-link`} to="/" activeclassname="active" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="blog" >blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="ourprofile" >our profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contactus" >Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <form className="form-inline">
                <button className="btn btn-outline-light" type="button">Contact Us</button>
            </form>
        </nav>
    );
};

export default Navbar;