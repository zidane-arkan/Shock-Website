import React from 'react';
import img1 from '../../assets/heroSlider/img-1.png';
import img2 from '../../assets/heroSlider/img-2.png';
import img3 from '../../assets/heroSlider/img-3.png';

const HeroSlider = () => {
    return (
        <section id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} className="d-block w-90" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} className="d-block w-90" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-90" alt="..." />
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
const Landing = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <HeroSlider />
            </div>
        </div>
    );
};

export default Landing;