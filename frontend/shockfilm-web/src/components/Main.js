import React from 'react';
import Home from './page/Home';
import Navbar from './layout/Navbar';

const Main = () => {
    return (
        <section className="container-fluid ">
            <div className="row position-relative">
                <Navbar/>
                <Home />
            </div>
        </section>
    );
};

export default Main;