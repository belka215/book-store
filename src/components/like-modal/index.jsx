import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_MODAL_ACTION } from "../../store/actions";
import close from './img/cross.png';
import "./index.scss";
import { FavoriteBookCard } from "../favorite-book-card";

export const LikeModal = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.likedBooks);
    const isDarkTheme = useSelector(state => state.darkTheme);

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