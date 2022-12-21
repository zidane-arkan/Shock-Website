import React from 'react';
import movie_1 from '../../../assets/movie/movie-1.png';
import { Link } from 'react-router-dom';

const DiscoverItem = ({ movieTitle, movieType, movieImgId }) => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <div className="discover__item col-sm-6 col-md-6 col__xl__custom__4">
            <div className="videotype__top">
                <img src={movieImg[`${movieImgId}`]} alt="Movie-1" width="100%" />
                <h5>Dua Pilar Satu Atap</h5>
                <span className="line"></span>
            </div>
            <div className="videotype__bottom">
                <p>Short Film</p>
                <Link to="portfolio">
                    <button className="btn btn__see btn-outline-light">See</button>
                </Link>

            </div>
        </div>
    );
};

export default DiscoverItem;