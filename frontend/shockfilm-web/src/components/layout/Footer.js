import React from 'react';
import footerLogo from '../../assets/logo/footerLogo.png';
const Footer = () => {
    const data = 's';
    return (
        <footer className="text-center text-lg-start text-white">
            <div className="container-fluid footer__box p-4 pb-0">
                <section className="footer__box">
                    <div className="row footer__top">
                        <div className="footer__top__start col-md-3 col-lg-3 col-xl-4 mt-0">
                            <img src={footerLogo} alt="ShockFilm Logo" width="100%" />
                            <p>
                                shockfilm is a community and a production house based in Palembang which aims to be a place for young people to convert their hobbies into the artworks!
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
                            <h6 className="mb-3 mb-xl-3 font-weight-bold">Artworks</h6>
                            <div className="footer__links">
                                <p>
                                    <a href="gta.com" className="text-white">Popular Works</a>
                                </p>
                                <p>
                                    <a href="gta" className="text-white">Short Movies</a>
                                </p>
                                <p>
                                    <a href="gta" className="text-white">Mini Series</a>
                                </p>
                                <p>
                                    <a href="gta" className="text-white">Video Ads</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-2">
                            <h6 className=" mb-3 mb-xl-3 font-weight-bold">Blog</h6>
                            <div className="footer__links">
                                <p>
                                    <a href="gta" className="text-white">Latest News</a>
                                </p>
                                <p>
                                    <a href="gta" className="text-white">Editing Tips</a>
                                </p>
                                <p>
                                    <a href="gta" className="text-white">Cinematography Tips</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mt-2">
                            <h6 className="mb-3 mb-xl-3 font-weight-bold">Profile</h6>
                            <div className="footer__links">
                                <p>About us</p>
                                <p>Careers</p>
                            </div>
                        </div>
                        <div className="footer__project col-md-4 col-lg-3 col-xl-2 mt-2">
                            <h5 className="font-weight-bold">Have Projects?</h5>
                            <p>Feel free to discuss about film, video ads, or anythings else!</p>
                            <button className="btn__custom btn__started" type="button">Contact Us</button>
                        </div>
                    </div>
                </section>
                <hr className="my-3" />
                <section className="py-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="py-3">
                                <a
                                    className="text-white"
                                    href="https://mdbootstrap.com/"
                                >
                                    ©2022 Shockfilm.id All Rights Reserved
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <a
                                href="gta"
                                className="text-white btn btn-outline-light btn-floating m-1"
                                role="button"
                            ><i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="gta"
                                className="text-white btn btn-outline-light btn-floating m-1"
                                role="button"
                            ><i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>

    );
};

export default Footer;