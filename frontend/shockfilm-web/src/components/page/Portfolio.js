import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import movie_1 from '../../assets/movie/movie-1.png';
import DiscoverItem from '../layout/Lists/DiscoverItem';

const Portfolio = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 position-relative px-0 pt__custom"
        >
            <article className="row__custom">
                <section className="row row__margin__bottom row__custom__1">     
                    <section className="row__custom__3">
                        <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            <DiscoverItem
                                movieTitle="Dua Pilar Satu Atap"
                                movieType="Short Film"
                                movieImgId="1"
                            />
                            
                        </article>
                        {/* <button className="btn__custom btn__contact mt-sm-3 mt-xl-5" type="button">Load More</button> */}
                    </section>
                </section>
            </article>
        </motion.section>
    );
};

export default Portfolio;