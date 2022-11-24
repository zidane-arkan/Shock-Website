import React from 'react';
import shockLogo from '../../assets/logo/shockLogo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar__header navbar-expand-lg navbar-light bg-transparent px-sm-4 py-sm-4 position-absolute ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img src={shockLogo} alt=""/>
            </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                <ul className="navbar-nav navbar__nav__custom mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">our profile</a>
                    </li>
                </ul>
            </div>
            <form className="form-inline">
                <button className="btn btn-outline-success" type="button">Contact Us</button>
            </form>
        </nav>
    );
};

export default Navbar;