import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { useSelector } from "react-redux";
import leftArrow from './img/longArrowB.png';
import rightArrow from './img/longArrowRB.png';
import { BookCard } from '../book-card';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

export const SimilarBooks = () => {
    const swiperRef = useRef();
    const books = useSelector((state) => state.books.content);
    const isDarkTheme = useSelector(state => state.darkTheme);

    return (
        <div className="wrapper">
            <div className={`similar-books${isDarkTheme ? " similar-books_dark" : ''}`}>
                <div className="similar-books__title-container">
                    <h3 className="similar-books__title">Similar Books</h3>
                    <div className="similar-books__title-container__arrows">
                        <div className="similar-books__title-container__arrows__item">
                            <img src={leftArrow} onClick={() => swiperRef.current.slidePrev()} />
                        </div>
                        <div className="similar-books__title-container__arrows__item">
                            <img src={rightArrow} onClick={() => swiperRef.current.slideNext()} />
                        </div>
                    </div>
                </div>
                <div className="similar-books__swiper-container">
                    <Swiper
                        modules={A11y}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {books.map((item, index) => {
                            return <SwiperSlide key={index}><BookCard book={item} key={index} /></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}