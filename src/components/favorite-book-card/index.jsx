import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from '../header/img/cart-black.png';
import trash from './img/trash.png';
import "./index.scss";
import { removeFromFavorites, addToCart } from "../../store/actions";

export const FavoriteBookCard = ({ book }) => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.darkTheme);

    const handleRemove = () => {
        dispatch(removeFromFavorites(book));
    }

    const handleAddToCart = () => {
        dispatch(addToCart(book));
        dispatch(removeFromFavorites(book))
    }

    return (
        <div className={`favorite-book${isDarkTheme ? " favorite-book_dark" : ""}`}>
            <div className="favorite-book__container">
                <Link to={`/books/${book.isbn13}`} className="favorite-book__img">
                    <img src={book.image} />
                </Link>
                <div className="favorite-book__text">
                    <div className="favorite-book__text__container">
                        <Link to={`/books/${book.isbn13}`} className="favorite-book__text__title">{book.title}</Link>
                        <p className="favorite-book__text__subtitle">{book.subtitle}</p>
                    </div>
                    <div className="favorite-book__text__btn">
                        <button className="favorite-book__add-btn" onClick={handleAddToCart}>Add to
                            <img src={cart} />
                        </button>
                    </div>
                </div>
                <div className="favorite-book__price">
                    <p className="favorite-book__price__num">{book.price}</p>
                    <div className="favorite-book__price__delete" onClick={handleRemove}>
                        <img src={trash} />
                    </div>
                </div>
            </div>
        </div>
    )
}