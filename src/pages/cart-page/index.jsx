import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import longArrow from '../book-page/img/longArrowB.png';
import './index.scss';
import { CartBookCard } from "../../components/cart-book-card";

export const CartPage = () => {
    const navigate = useNavigate();
    const books = useSelector((state) => state.cart);
    const isDarkTheme = useSelector(state => state.darkTheme);
    const total = (books.reduce((amount, book) => amount + parseFloat(book.price.slice(1)), 0)).toFixed(2);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="wrapper">
            <div className={`cart-page${isDarkTheme ? ' cart-page_dark' : ''}`}>
                <div className="book-page__go-back">
                    <img src={longArrow} onClick={handleGoBack} />
                </div>
                <h1 className="cart-page__title">Shopping Cart</h1>
                <div className="cart-page__content">
                    {books.map((book) => {
                        return <CartBookCard book={book} key={book.isbn13} />
                    })}
                    <div className={`cart-page__content__total${isDarkTheme ? ' cart-page__content__total_dark' : ''}`}>
                        <p className="cart-page__content__total__text">Order Total:</p>
                        <p className="cart-page__content__total__num">${total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}