import React from 'react';
import img1 from '../../../assets/heroSlider/img-1.png';
import img2 from '../../../assets/heroSlider/img-2.png';
import img3 from '../../../assets/heroSlider/img-3.png';
import user1 from '../../../assets/testimonial/user1.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const TopContent = () => {
    return (
        <article className="detail__heading mx-auto">
            <div className="heading__top">
                <h1>
                    Gallery Works
                </h1>
            </div>
            <div className="heading__middle">
                <p>Shock Film is a community and a production house based in Palembang which aims to be a place for young people to convert their hobbies into the artworks! </p>
            </div>
            <div className="heading__bottom">
                <button className="btn__custom btn__started" type="button">Get Started</button>
            </div>
        </article>
    );
};
const Blog = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="row__custom row__custom__4 row__margin__bottom "
        >
            <TopContent />
        </motion.section>
    );
};

export default Blog;