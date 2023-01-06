import React from 'react';
import { motion } from 'framer-motion';
import DiscoverItem from '../layout/Lists/DiscoverItem';
import BlogItem from '../layout/Lists/BlogItem';
import { Link } from 'react-router-dom';

const BlogLatest = () => {
    return (
        <>
            <section className="blog__heading col-sm-12 col-md-6 col-xl-5">
                <h2>Our latest news</h2>
                <div className="flex__custom">
                    <BlogItem
                        title="Cara Membuat Film Horror"
                        blogImgId='1'
                        blogType="new"
                    />
                </div>
            </section>
            <section className='blog__line col-sm-2 col-md-2 col__line__custom'>
                <span className="line"></span>
            </section>
            <section className="bloglatest__wrap col-sm-12 col-md-6 col-xl-5 ">
                <BlogItem
                    title="Cara Membuat Film Horror"
                    blogImgId='1'
                />
                <BlogItem
                    title="Cara Membuat Film Horror"
                    blogImgId='1'
                />
                <BlogItem
                    title="Cara Membuat Film Horror"
                    blogImgId='1'
                />
            </section>
        </>
    );
};
const BlogEditing = () => {
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
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Berjalan Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                </article>
            </section>
        </>
    );
};
const BlogWriting = () => {
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
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Berjalan Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Tiga Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                    <DiscoverItem
                        movieTitle="Dua Pilar Satu Atap"
                        movieImgId="1"
                    />
                </article>
            </section>
        </>
    );
};
const Blog = () => {
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