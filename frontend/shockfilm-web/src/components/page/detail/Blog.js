import React from 'react';
import imgheading1 from '../../../assets/detailblog/imgheading1.png';
import author1 from '../../../assets/detailblog/author1.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const TopContent = () => {
    return (
        <article className="detailHeading__blog mx-auto">
            <div className="heading__top">
                <h1>
                    Bagaimana membuat film horrormu lebih menakutkan?
                </h1>
            </div>
            <div className="heading__bottom pt__custom_1">
                <article className="works__1">
                    <div className="row ">
                        <div className='author__blog__box col-xl-12 col-md-12'>
                            <div className='author__profile col-md-5 col-xl-5'>
                                <img className="image__heading__cover" src={author1} alt="profileAuthor" />
                                <p>Haris Jojo</p>
                            </div>
                            <div className='col__line__custom'>
                                <span className='line'></span>
                            </div>
                            <div className='w-100 col-xl-5 col-md-5 pl__custom__1'>
                                <p>30 November 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="behind__text">
                        <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                        <p>Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>

                        <p>Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>
                        <p>Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
                    </div>
                </article>
            </div>
        </article>
    );
};
const ImgContent = () => {
    return (
        <section className="image__heading">
            <img src={imgheading1} className="image__heading__cover w-100" alt="img__heading" />
        </section>
    );
};
const Blog = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-md-12 position-relative px-0 py-0"
        >
            <ImgContent />
            <section className="row__detail__blog row__custom row__custom__6 row__margin__bottom ">
                <TopContent />
            </section>
        </motion.section>
    );
};

export { Blog };