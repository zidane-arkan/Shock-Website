import React from 'react';
import { motion } from 'framer-motion';
import movie_1 from '../../assets/blog/1.png';

import { Link } from 'react-router-dom';

const BlogLatest = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <>
            <section className="blog__heading col-sm-12 col-md-6 col-xl-5">
                <h2>Our latest news</h2>
                <div className="flex__custom">
                    <div className=" blog__item col-sm-12 col-md-12 col-xl-12">
                        <div className="bloglatest__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Tips Membuat film horror</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog__line col-sm-2 col-md-2 col__line__custom'>
                <span className="line"></span>
            </section>
            <section className="bloglatest__wrap col-sm-12 col-md-6 col-xl-5 ">
                <div className="blog__item col-sm-12 col-md-12 col-xl-12">
                    <div className="bloglatest__top">
                        <div>
                            <h6>Apa yang membuat film itu bagus?</h6>
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="40%" />
                        </div>

                    </div>
                </div>
                <div className="blog__item col-sm-12 col-md-12 col-xl-12">
                    <div className="bloglatest__top">
                        <div>
                            <h6>Apa yang membuat film itu bagus?</h6>
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="40%" />
                        </div>

                    </div>
                </div>
                <div className="blog__item col-sm-12 col-md-12 col-xl-12">
                    <div className="bloglatest__top">
                        <div>
                            <h6>Apa yang membuat film itu bagus?</h6>
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="40%" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
const BlogEditing = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <>
            <article className="popular__heading col-md-12 col-xl-12">
                <h2>Editing Tips</h2>
                <div className="flex__custom">
                    <Link className="nav-link nav__link__custom">View all</Link>
                </div>
            </article>
            <section className="row__custom__3 row__custom__bottom">
                <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};
const BlogWriting = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <>
            <article className="popular__heading col-md-12 col-xl-12">
                <h2>Scriptwriting Tips</h2>
                <div className="flex__custom">
                    <Link className="nav-link nav__link__custom">View all</Link>
                </div>
            </article>
            <section className="row__custom__3">
                <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="discover__item col-sm-6 col-md-6 col__xl__custom__3">
                        <div className="videotype__top">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <h5>Dua Pilar Satu Atap</h5>
                            <span className="line"></span>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};
const Blog = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 position-relative px-0 pt__custom"
        >
            <article className="row__custom">
                <section className="row row__margin__bottom row__custom__1">
                    <BlogLatest />
                    <BlogEditing />
                    <BlogWriting />
                </section>
            </article>
        </motion.div>
    );
};

export default Blog;