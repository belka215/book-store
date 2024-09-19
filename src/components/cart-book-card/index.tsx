import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/actions";
import { getDarkTheme } from "../../store/selectors";
import { IBookComponent } from "../../typings/book";
import trash from "../favorite-book-card/img/trash.png";
import trashW from '../favorite-book-card/img/trashW.png'
import { AppDispatch } from "../../store";
import './index.scss';

export const CartBookCard: FC<IBookComponent> = ({ book }) => {
    const dispatch: AppDispatch = useDispatch();
    const isDarkTheme = useSelector(getDarkTheme);

    const handleDelete = () => {
        dispatch(removeFromCart(book))
    }

    return (
        <div className={`cart-book-card${isDarkTheme ? ' cart-book-card_dark' : ''}`}>
            <div className="cart-book-card__container">
                <Link to={`/books/${book.isbn13}`} className="cart-book-card__img">
                    <img src={book.image} />
                </Link>
                <div className="cart-book-card__text">
                    <div className="cart-book-card__text__container">
                        <Link to={`/books/${book.isbn13}`} className="cart-book-card__text__title">{book.title}</Link>
                        <p className="cart-book-card__text__subtitle">{book.subtitle}</p>
                    </div>
                </div>
                <div className="cart-book-card__price">
                    <p className="cart-book-card__price__text">Price: </p>
                    <p className="cart-book-card__price__num">{book.price}</p>
                    <div className="cart-book-card__price__delete" onClick={handleDelete}>
                        <img src={isDarkTheme ? trashW : trash} />
                    </div>
                </div>
            </div>
        </div>
    )
}