import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetailedBookMiddlewareAction, addToCart } from "../../store/actions";
import { Spinner } from "../../components/spinner";
import longArrow from './img/longArrowB.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import dots from './img/dots.png';
import arrowDown from './img/arrowDown.png';
import heartW from "../../components/header/img/heart-white.png";
import heartFW from './img/heartFullW.png';
import { Subscribe } from "../../components/subscribe";
import { SimilarBooks } from "../../components/similar-books";
import { addToFavorites } from "../../store/actions";
import { getDarkTheme, getDetailedBook, getLikedBooks } from "../../store/selectors";
import './index.scss';

export const BookPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const book = useSelector(getDetailedBook);
    const isDarkTheme = useSelector(getDarkTheme);
    const [tab, setTab] = useState('description');
    const { bookIsbn } = useParams();
    
    useEffect(() => {
        dispatch(addDetailedBookMiddlewareAction(bookIsbn));
    }, [location.pathname]);

    const isliked = Boolean(useSelector(getLikedBooks).find(book => {
        return book.isbn13 === bookIsbn
    }));
    const isInCart = Boolean(useSelector(state => state.cart).find((book) => {
        return book.isbn13 === bookIsbn
    }));

    useEffect(() => {
        dispatch(addDetailedBookMiddlewareAction(bookIsbn));
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleChangeTab = (event) => {
        setTab(event.target.value)
    }

    const handleLike = () => {
        dispatch(addToFavorites(book))
    }

    const handleAddToCart = () => {
        dispatch(addToCart(book));
    }

    if (!book) {
        return <Spinner />;
    }

    return (
        <div className="wrapper">
            <div className="book-page">
                <div className="book-page__go-back">
                    <img src={longArrow} onClick={handleGoBack} />
                </div>
                <div className={`book-details${isDarkTheme ? ' book-details_dark' : ''}`}>
                    <h1 className="book-details__title">{book.title}</h1>
                    <div className={`book-details__img-container${isDarkTheme ? ' book-details__img-container_dark' : ''}`}>
                        <div className="book-details__img-container__img">
                            <img src={book.image} />
                            <div className="heart" onClick={handleLike}>
                                <img src={isliked ? heartFW : heartW} className="heart__img" />
                            </div>
                        </div>
                        <div className="book-details__img-container__info">
                            <div className="book-details__img-container__info__rate">
                                <p className="price">{book.price}</p>
                                <div className="stars"></div>
                            </div>
                            <div className="book-details__img-container__info__text">
                                <p className="grey-text">Authors</p>
                                <p className="black-text">{book.authors}</p>
                            </div>
                            <div className="book-details__img-container__info__text">
                                <p className="grey-text">Publisher</p>
                                <p className="black-text">{book.publisher}</p>
                            </div>
                            <div className="book-details__img-container__info__text">
                                <p className="grey-text">Language</p>
                                <p className="black-text">English</p>
                            </div>
                            <div className="book-details__img-container__info__text">
                                <p className="grey-text">Format</p>
                                <p className="black-text">Paper book / ebook (PDF)</p>
                            </div>
                            <div className="book-details__img-container__info__more">
                                <p className="black-text">More details</p>
                                <img src={arrowDown} />
                            </div>
                            <div className="book-details__img-container__info__btn">
                                {(!isInCart && <button className={isDarkTheme ? "btn btn_dark" : "btn"} onClick={handleAddToCart}>ADD TO CART</button>)}
                                {(isInCart && <button className="btn added" onClick={handleAddToCart}>ADDED!</button>)}
                            </div>
                            <div className="book-details__img-container__info__preview">
                                <p className="black-text">Preview book</p>
                            </div>
                        </div>
                    </div>
                    <div className="book-details__info-container">
                        <div className="tabs">
                            <button value="description" className={tab === 'description' ? "tabs__item active" : "tabs__item"} onClick={handleChangeTab}>Description</button>
                            <button value="authors" className={tab === 'authors' ? "tabs__item active" : "tabs__item"} onClick={handleChangeTab}>Authors</button>
                            <button value="reviews" className={tab === 'reviews' ? "tabs__item active" : "tabs__item"} onClick={handleChangeTab}>Reviews</button>
                        </div>
                        <div className="book-details__info-container__content">
                            <p className={isDarkTheme ? "book-details__info-container__content__text_dark" : "book-details__info-container__content__text"}>
                                {(tab === 'description' && book.desc)}
                                {(tab === 'authors' && book.authors)}
                                {(tab === 'reviews' && "Reviews")}
                            </p>
                        </div>
                    </div>
                    <div className="book-details__socials">
                        <div className="book-details__socials__icon">
                            <img src={facebook} />
                        </div>
                        <div className="book-details__socials__icon">
                            <img src={twitter} />
                        </div>
                        <div className="book-details__socials__icon">
                            <img src={dots} />
                        </div>
                    </div>
                </div>
                <Subscribe />
                <SimilarBooks />
            </div>
        </div>
    )
}