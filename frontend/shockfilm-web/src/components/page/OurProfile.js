import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile1 from '../../assets/ourprofile/profile1.png';
const TopContent = () => {
    return (
        <article className="detail__heading mx-auto">
            <div className="heading__top">
                <h1>
                    About Us
                </h1>
            </div>
            <div className="heading__middle">
                <p>Shock Film is a community and a production house based in Palembang which aims to be a place for young people to convert their hobbies into the artworks! </p>
            </div>
            <div className="heading__bottom">
                <Link to="contactus">
                    <button className="btn__custom btn__started" type="button">Get Started</button>
                </Link>
            </div>
        </article>
    );
};
const ProfileContent = () => {
    return (
        <article className='profile__box row justify-content-center'>
            <article className="ourprofile__img__box col-sm-12 col-md-6 col-xl-5">
                <img className='img__profile img-fluid' src={profile1} alt="profile" />
            </article>
            <article className="col-sm-12 col-md-6 col-xl-5">
                <div className="portfolio__info profile__info">
                    <h3>We Are Professional Filmmaker</h3>
                    <p class="fst-italic py-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>10 Years</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span>
                                </li>
                                <li>
                                    <i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="pb-3"> Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    <p class="m-0"> Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.</p>
                </div>
            </article>
        </article>
    );
};
const OurProfile = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="row__custom row__custom__4 row__margin__bottom "
        >
            <TopContent />
            <ProfileContent />
        </motion.section>
    );
};

export default OurProfile;