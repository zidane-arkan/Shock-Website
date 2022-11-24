import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../page/Home';
import Blog from '../page/Blog';
import OurProfile from '../page/OurProfile';
import Portfolio from '../page/Portfolio';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='blog' element={<Blog />} />
                <Route path='ourprofile' element={<OurProfile />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;