import React, { useState, useRef, useEffect } from 'react';
import img1 from '../../assets/heroSlider/img-1.png';
import img2 from '../../assets/heroSlider/img-2.png';
import img3 from '../../assets/heroSlider/img-3.png';
import movie_1 from '../../assets/movie/movie-1.png';
import icon_1 from '../../assets/aboutus/1.png';
import man from '../../assets/movie/man.png';
import phone from '../../assets/contactus/phone.png';
import location from '../../assets/contactus/location.png';
import globe from '../../assets/contactus/globe.png';
import clientList from '../../assets/clients/clientList.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import InputContact from '../ui/InputContact';

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
    const movieImg = {
        "1": movie_1
    };
    return (
        <section className="row row__margin__bottom row__custom__1">
            <article className="popular__heading col-md-12 col-xl-12">
                <h2>Our popular works</h2>
                <Link className="nav-link nav__link__custom">View all</Link>
            </article>
            <article className="movie__box col-sm-12 col-md-12 col-xl-12">
                <div className="movie__item col-sm-6 col-md-6 col-xl-3">
                    <div className="videotype__top">
                        <div className="videotype__img">
                            <img src={movieImg[`${1}`]} alt="Movie-1" width="100%" />
                            <div class="gallery-links d-flex align-items-center justify-content-center">
                                <a href="assets/img/gallery/gallery-2.jpg" title="Gallery 2" class="glightbox preview-link">
                                    Link Video
                                </a>
                                <a href="gallery-single.html" class="details-link">
                                    Link Detail
                                </a>
                            </div>
                        </div>
                        <h5>Dua Pilar Satu Atap</h5>
                        <span className="line"></span>
                    </div>
                    <div className="videotype__bottom">
                        <p>Short Film</p>
                        <button className="btn btn__see btn-outline-light">See</button>
                    </div>
                </div>
                <div className="movie__item col-sm-6 col-md-6 col-xl-3">
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
                <div className="movie__item col-sm-6 col-md-6 col-xl-3">
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
                <div className="movie__item col-sm-6 col-md-6 col-xl-3">
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
        </section>
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
                {/* <article className="discover__box col-sm-12 col-md-12 col-xl-12">
                </article> */}
                <button className="btn__custom btn__contact mt-sm-3 mt-xl-5" type="button">Load More</button>
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
const ContactUs = () => {
    return (
        <section className="row row__custom__4 row__margin__bottom ">
            <article className="contactus__1 col-sm-12 col-md-12 col-xl-12">
                <div className="contactus__title">
                    <h2>Having Project in mind?</h2>
                </div>
            </article>
            <section className="row row__custom__5">
                <article className="contactus__2 col-sm-12 col-md-3 col-xl-4">
                    <section className="contactus__2__box">
                        <div className="contactus__text">
                            <img src={phone} alt="Phone" />
                            <h4>Call us</h4>
                        </div>
                        <p>+62 8555 555 555</p>
                    </section>
                    <section className="contactus__2__box">
                        <div className="contactus__text">
                            <img src={location} alt="Phone" />
                            <h4>Location</h4>
                        </div>
                        <p>Palembang, Indonesia</p>
                    </section>
                    <section className="contactus__2__box">
                        <div className="contactus__text">
                            <img src={globe} alt="Phone" />
                            <h4>Mail us</h4>
                        </div>
                        <p>shockfilm@gmail.com</p>
                    </section>
                </article>
                <article className="contactus__3 col-sm-12 col-md-8 col-xl-8">
                    <div className="contactus__title">
                        <h2>Contact Now</h2>
                        <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
                    </div>
                    <form className="form__contact__box" >
                        <div className="form__contact">
                            <InputContact
                                type="text"
                                typeName="Name"
                                typeId="name"
                                htmlFor="name"
                                ariaDescribe="nameHelp"
                            />
                            <InputContact
                                type="email"
                                typeName="Email"
                                typeId="email"
                                htmlFor="email"
                                ariaDescribe="emailHelp"
                            />
                            <InputContact
                                type="password"
                                typeName="Password"
                                typeId="exampleInputPassword1"
                                htmlFor="exampleInputPassword1"
                                ariaDescribe="passwordHelp"
                            />
                            <InputContact
                                type="text"
                                typeName="Message"
                                typeId="message"
                                htmlFor="message"
                                ariaDescribe="messageHelp"
                            />
                            {/* <div className="position-relative mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label label__custom">Password</label>
                                <input type="password" className="form-control form__contactus form__control__custom" id="exampleInputPassword1" />
                            </div> */}
                            {/* <div className="position-relative mb-3">
                                <label htmlFor="email" className="form-label label__custom">Email</label>
                                <input type="email" className="form-control form__contactus form__control__custom" id="email" aria-describedby="emailHelp" />
                            </div>
                            
                            <div className="position-relative mb-3">
                                <label htmlFor="message" className="form-label label__custom">Message</label>
                                <input type="text" className="form-control form__contactus form__control__custom" id="message" />
                            </div> */}
                        </div>
                        <button type="submit" className="btn btn__submit__contact">Submit</button>
                    </form>
                </article>
            </section>
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
                {/* <ContactUs /> */}
            </main>
        </motion.div>
    );
};

export default Home;