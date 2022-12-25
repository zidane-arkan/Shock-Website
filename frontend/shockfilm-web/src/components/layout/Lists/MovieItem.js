import React from 'react';
import { Link } from 'react-router-dom';
import movie_1 from '../../../assets/movie/movie-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieItem = ({ backdropHandler, embedIdValue, movieTitle, movieType,movieImgId }) => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <div className="movie__item col-sm-6 col-md-6 col-xl-3">
            <div className="videotype__top">
                <div className="videotype__img">
                    <img src={movieImg[`${movieImgId}`]} alt="Movie-1" width="100%" />
                    <div className="gallery-links d-flex align-items-center justify-content-center">
                        <button id={embedIdValue} onClick={backdropHandler} className='fontAwesome__btn'>
                            <FontAwesomeIcon id={embedIdValue} icon="fa-solid fa-maximize" size='xl' />
                        </button>
                        <Link to='works' className='fontAwesome__btn'>
                            <FontAwesomeIcon icon="fa-solid fa-link" size='xl' />
                        </Link>
                    </div>
                </div>
                <h5>{movieTitle}</h5>
                <span className="line"></span>
            </div>
            <div className="videotype__bottom">
                <p>{movieType}</p>
                <button className="btn btn__see btn-outline-light">See</button>
            </div>
        </div>
    );
};

export default React.memo(MovieItem);