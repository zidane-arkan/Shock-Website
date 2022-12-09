import React from 'react';
import imgheading1 from '../../../assets/detailblog/imgheading1.png';
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
const ImgContent = () => {
    return (
        <section className="image__heading">
            <img src={imgheading1} className="w-100" alt="img__heading"/>
        </section>
    );
};
const Blog = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 position-relative px-0 py-0"
        >
            <ImgContent />
            <section className="row__custom row__custom__4 row__margin__bottom ">
                <TopContent />
            </section>
        </motion.section>
    );
};

export { Blog };