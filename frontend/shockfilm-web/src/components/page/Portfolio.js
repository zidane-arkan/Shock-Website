import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import movie_1 from '../../assets/movie/movie-1.png';
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
                    {/* <article className="popular__heading col-md-12 col-xl-12">
                        <h2>Discover</h2>
                        <div className="flex__custom">
                            <Link className="nav-link nav__link__custom">View all</Link>
                        </div>
                    </article> */}
                    <section className="row__custom__3">
                        <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                            <div className="discover__item col-sm-6 col-md-6 col__xl__custom">
                                <div className="videotype__top">
                                    <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                                    <h5>Dua Pilar Satu Atap</h5>
                                    <span className="line"></span>
                                </div>
                                <div className="videotype__bottom">
                                    <p>Short Film</p>
                                    <button className="btn btn__see btn-outline-light">See</button>
                                </div>
                            </div>
                        </article>
                        <button className="btn__custom btn__contact mt-sm-3 mt-xl-5" type="button">Load More</button>
                    </section>
                </section>
            </article>
        </motion.section>
    );
};

export default Portfolio;