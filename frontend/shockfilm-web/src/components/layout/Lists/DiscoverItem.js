import React from 'react';
import movie_1 from '../../../assets/movie/movie-1.png';
import movieBlog_1 from '../../../assets/blog/1.png';
import { Link } from 'react-router-dom';

const DiscoverItem = ({ movieTitle, movieType, movieImgId }) => {
    const movieImg = {
        "1": movie_1
    };
    const movieBlog = {
        "1" : movieBlog_1
    }
    const colCustomType = movieType ? 'col__xl__custom__4' : 'col__xl__custom__3';
    return (
        <div className={`discover__item col-sm-6 col-md-6 ${colCustomType} `}>
            <div className="videotype__top">
                <img src={movieType ? movieImg[`${movieImgId}`] : movieBlog[`${movieImgId}`]} alt="Movie-1" width="100%" />
                <h5>{movieTitle}</h5>
                <span className="line"></span>
            </div>
            {movieType ?
                <div className="videotype__bottom">
                    <p>{movieType}</p>
                    <Link to="portfolio">
                        <button className="btn btn__see btn-outline-light">See</button>
                    </Link>
                </div> :
                null
            }
        </div>
    );
};

export default DiscoverItem;