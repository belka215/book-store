import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './index.scss';

export const BookCard = ({ book }) => {
    const isDarkTheme = useSelector(state => state.darkTheme);

    return (
        <div className={`book-card${isDarkTheme ? ' book-card_dark' : ``}`}>
            <div className="book-card__top">
                <Link to={`/books/${book.isbn13}`} className="book-card__img">
                    <img src={book.image} />
                </Link>
                <div className="book-card__text">
                    <Link to={`/books/${book.isbn13}`} className="book-card__title">{book.title}</Link>
                    <p className="book-card__subtitle">{book.subtitle}</p>
                </div>
            </div>
            <div className={`book-card__bottom${isDarkTheme ? ' book-card__bottom_dark' : ''}`}>
                <div className="book-card__bottom__price">{book.price}</div>
                <div className="book-card__bottom__rate"></div>
            </div>
        </div>
    )
}