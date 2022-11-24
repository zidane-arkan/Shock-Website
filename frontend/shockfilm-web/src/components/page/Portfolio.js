import React from 'react';
import { motion } from 'framer-motion';
const Portfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 px-0 py-0"
        >
            Portfolio
        </motion.div>
    );
};

export default Portfolio;