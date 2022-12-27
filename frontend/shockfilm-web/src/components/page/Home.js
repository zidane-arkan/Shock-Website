import React, { useState, useRef, useEffect, useCallback } from 'react';
import img1 from '../../assets/heroSlider/img-1.png';
import img2 from '../../assets/heroSlider/img-2.png';
import img3 from '../../assets/heroSlider/img-3.png';
import movie_1 from '../../assets/movie/movie-1.png';
import icon_1 from '../../assets/aboutus/1.png';
import man from '../../assets/movie/man.png';
import MovieItem from '../layout/Lists/MovieItem';
import DiscoverItem from '../layout/Lists/DiscoverItem';
import clientList from '../../assets/clients/clientList.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import VideoModel from '../layout/VideoModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSlider = () => {
    return (
        <section id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    );
};
const HeroHeading = () => {
    return (
        <section className="hero__heading mx-auto position-absolute">
            <div className="heading__top">
                <h1>
                    Welcome to our official artworks website!
                </h1>
            </div>
            <div className="heading__middle">
                <p>Shock Film is a community and a production house based in Palembang which aims to be a place for young people to convert their hobbies into the artworks! </p>
            </div>
            <div className="heading__bottom">
                <button className="btn__custom btn__started" type="button">Get Started</button>
                <button className="btn__custom btn__contact" type="button">Contact Us</button>
            </div>
        </section>
    );
};
const PopularWorks = () => {
    const [isBackdrop, setIsBackdrop] = useState(false);
    const [embedId, setEmbedId] = useState('');
    const backdropHandler = useCallback((e) => {
        const id = e.target.parentNode.id;
        setEmbedId(id);
        setIsBackdrop((oldValue) => {
            document.body.style.overflow = 'unset';
            return !oldValue;
        });
    }, []);
    useEffect(() => {
        if (isBackdrop) {
            document.body.style.overflow = 'hidden';
        }
    }, [isBackdrop]);
    return (
        <>
            <section className="row row__margin__bottom row__custom__1">
                {isBackdrop ? <VideoModel embedId={embedId} backdropHandler={backdropHandler} /> : null}
                <article className="popular__heading col-md-12 col-xl-12">
                    <h2>Our popular works</h2>
                    <Link className="nav-link nav__link__custom">View all</Link>
                </article>
                <article className="movie__box col-sm-12 col-md-12 col-xl-12">
                    <MovieItem
                        backdropHandler={backdropHandler}
                        embedIdValue='uty2zd7qizA'
                        movieTitle="Jagat Semesta"
                        movieType="Short Film"
                        movieImgId="1"
                    />
                    <MovieItem
                        backdropHandler={backdropHandler}
                        embedIdValue='uty2zd7qizA'
                        movieTitle="Dua Darah"
                        movieType="Short Film"
                        movieImgId="2"
                    />
                    <MovieItem
                        backdropHandler={backdropHandler}
                        embedIdValue='ILRs2r6lcHY'
                        movieTitle="Nama dan Jaguar"
                        movieType="Short Film"
                        movieImgId="3"
                    />
                    <MovieItem
                        backdropHandler={backdropHandler}
                        embedIdValue='ILRs2r6lcHY'
                        movieTitle="Kekuatan Bersih"
                        movieType="Short Film"
                        movieImgId="4"
                    />
                </article>
            </section>
        </>

    );
};
const BehindScene = () => {
    return (
        <section className="row row__margin__bottom ">
            <article className="behind__1 col-sm-12 col-md-3 col-xl-4">
                <div className="behind__title">
                    <h2>Men behind the scenes.</h2>
                </div>
                <div className="behind__text">
                    <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    <button className="btn__custom btn__started" type="button">See More</button>
                </div>
            </article>
            <article className="behind__2 col-sm-12 col-md-8 col-xl-8">
                <img src={man} alt="Man Behind the scenes" width="80%" />
            </article>
        </section>
    );
};
const AboutUs = () => {
    const aboutusImg = {
        "1": icon_1
    };
    return (
        <section className="row row__margin__bottom row__custom__2 ">
            <article className="aboutus__1 col-sm-12 col-md-12 col-xl-12">
                <div className="aboutus__title">
                    <h2>What Are We?</h2>
                    <p>Sebuah komunitas Perfilman di Palembang.</p>
                </div>
            </article>
            <article className="aboutus__box col-sm-12 col-md-12 col-xl-12 position-relative">
                <div className="aboutus__item col-sm-3 col-md-3 col-xl-3">
                    <div className="aboutus__top">
                        <img src={aboutusImg[`${1}`]} alt="Movie-1" width="100%" />
                        <h5>Dua Pilar Satu Atap</h5>
                    </div>
                </div>
                <div className="aboutus__item col-sm-3 col-md-3 col-xl-3">
                    <div className="aboutus__top">
                        <img src={aboutusImg[`${1}`]} alt="Movie-1" width="100%" />
                        <h5>Posuere urna, sit amet molestie leo</h5>
                    </div>
                </div>
                <div className="aboutus__item col-sm-3 col-md-3 col-xl-3">
                    <div className="aboutus__top">
                        <img src={aboutusImg[`${1}`]} alt="Movie-1" width="100%" />
                        <h5>Semper pretium libero sed quam ac integer ut</h5>
                    </div>
                </div>
                <div className="aboutus__item col-sm-3 col-md-3 col-xl-3">
                    <div className="aboutus__top">
                        <img src={aboutusImg[`${1}`]} alt="Movie-1" width="100%" />
                        <h5>Lectus volutpat magna vitae in arcu</h5>
                    </div>
                </div>
            </article>
        </section>
    );
};
const Discover = () => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <section className="row row__margin__bottom row__custom__1">
            <article className="popular__heading col-md-12 col-xl-12">
                <h2>Discover</h2>
                <div className="flex__custom">
                    <Link className="nav-link nav__link__custom">View all</Link>
                </div>
            </article>
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
                {/* <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                </article> */}
                {/* <button className="btn__custom btn__contact mt-sm-3 mt-xl-5" type="button">Load More</button> */}
            </section>
        </section>
    );
};
const Clients = () => {
    const aboutusImg = {
        "1": icon_1
    };
    return (
        <section className="row row__margin__bottom row__custom__0 ">
            <article className="client__1 col-sm-12 col-md-12 col-xl-12">
                <div className="client_title">
                    <h2>Our Clients</h2>
                </div>
            </article>
            <article className="clients__box col-sm-12 col-md-12 col-xl-12 position-relative">
                <div className="clients__item col-sm-3 col-md-12 col-xl-12">
                    <div className="clients__top">
                        <img src={clientList} alt="Movie-1" width="100%" />
                    </div>
                </div>
            </article>
        </section>
    );
};
const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 position-relative px-0 py-0"
        >
            <HeroSlider />
            <HeroHeading />

            <main className="row__custom">
                <PopularWorks />
                <BehindScene />
                <AboutUs />
                <Discover />
                <Clients />

            </main>
        </motion.div>
    );
};

export default Home;