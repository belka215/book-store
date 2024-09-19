import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_MODAL_ACTION } from "../../store/actions";
import close from './img/cross.png';
import { FavoriteBookCard } from "../favorite-book-card";
import { getDarkTheme, getLikedBooks } from "../../store/selectors";
import { AppDispatch } from "../../store";
import "./index.scss";

export const LikeModal: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const books = useSelector(getLikedBooks);
    const isDarkTheme = useSelector(getDarkTheme);

    const handleClose = () => {
        dispatch(TOGGLE_MODAL_ACTION)
    }
    return (
        <div className={`modal${isDarkTheme ? " modal_dark" : ""}`}>
            <div className="modal__container">
                <div className="modal__title-container">
                    <h3 className="modal__title">Favorite Books</h3>
                    <div className="modal__title-container__img" onClick={handleClose}>
                        <img src={close} />
                    </div>
                </div>
                <div className="modal__books">
                    {books.map((book, index) => {
                        return <FavoriteBookCard book={book} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}