import React from 'react';
import img1 from '../../../assets/heroSlider/img-1.png';
import img2 from '../../../assets/heroSlider/img-2.png';
import img3 from '../../../assets/heroSlider/img-3.png';
import user1 from '../../../assets/testimonial/user1.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Slider = () => {
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
const Works = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="row__custom row__custom__4 row__margin__bottom "
        >
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
            <article className='col-md-12'>
                <Slider />
            </article>
            <article className='row row__custom__baseline'>
                <article className="works__1 col-sm-12 col-md-8 col-xl-8">
                    <div className="behind__title">
                        <h2>Men behind the scenes.</h2>
                    </div>
                    <div className="behind__text">
                        <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                        <p>Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>
                        <div className="testimonial__items">
                            <p><FontAwesomeIcon icon="fa-solid fa-quote-left" size='xl' />&nbsp; Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa &nbsp;<FontAwesomeIcon icon="fa-solid fa-quote-right" size='xl' />.</p>
                            <div className='testimonial__box'>
                                <img src={user1} className="testimonial__profile" alt="..." />
                                <div>
                                    <h3>David Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>
                        </div>
                        <p>Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
                        <p>Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
                    </div>
                </article>
                <article className="works__2 col-sm-12 col-md-1 col-xl-1"></article>
                <article className="works__2 col-sm-12 col-md-3 col-xl-3">
                    <div className="portfolio__info">
                        <h3>Project information</h3>
                        <ul>
                            <li>
                                <strong>Category</strong>
                                <span>Nature Photography</span>
                            </li>
                            <li>
                                <strong>Client</strong>
                                <span>ASU Company</span>
                            </li>
                            <li>
                                <strong>Project date</strong>
                                <span>01 March, 2022</span>
                            </li>
                            <li>
                                <strong>Project URL</strong>
                                <Link to="/">www.example.com</Link>
                            </li>
                            <li>

                                <Link className="btn__custom btn__started" to="/" >Visit Website</Link>

                            </li>
                        </ul>
                    </div>
                </article>
            </article>
        </motion.section>
    );
};

export default Works;