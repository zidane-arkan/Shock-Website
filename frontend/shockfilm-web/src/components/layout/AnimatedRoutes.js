import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../page/Home';
import Blog from '../page/Blog';
import { Blog as DetailBlog } from '../page/detail/Blog';
import OurProfile from '../page/OurProfile';
import Portfolio from '../page/Portfolio';
import ContactUs from '../page/ContactUs';
import Works from '../page/detail/Works';
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='blog' element={<Blog />} />
                <Route path='detailblog' element={<DetailBlog />} />
                <Route path='ourprofile' element={<OurProfile />} />
                <Route path='contactus' element={<ContactUs />} />
                <Route path='works' element={<Works />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;