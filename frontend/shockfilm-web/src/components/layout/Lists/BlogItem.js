import React from 'react';
import movie_1 from '../../../assets/blog/1.png';

const BlogItem = ({ title, blogImgId, blogType }) => {
    const movieImg = {
        "1": movie_1
    };
    return (
        <div className="blog__item col-sm-12 col-md-12 col-xl-12">
            <div className="bloglatest__top">
                {
                    blogType ?
                        <>
                            <img src={movieImg[`${blogImgId}`]} alt="Movie-1" width="100%" />
                            <h5>{title}</h5>
                        </>
                        :
                        <div>
                            <img src={movieImg[`${blogImgId}`]} alt="Movie-1" width="40%" />
                            <h6>{title}</h6>
                        </div>
                }
            </div>
        </div>
    );
};

export default BlogItem;