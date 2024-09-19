import { FC, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBurger, getDarkTheme, getSearchValue } from "../../store/selectors";
import { TOGGLE_BURGER_ACTION, TOGGLE_DARK_THEME_ACTION, TOGGLE_MODAL_ACTION } from "../../store/actions";
import heartB from "./img/heart-black.png";
import heartW from "./img/heart-white.png";
import cartB from "./img/cart-black.png";
import cartW from './img/cart-white.png';
import personB from "./img/person-black.png";
import personW from './img/person-white.png';
import magglassB from "./img/magglassB.png";
import magglassW from './img/magglassW.png';
import moon from './img/moon.png';
import sun from './img/sun.png';
import './index.scss';

interface IHeader {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: FC<IHeader> = ({ handleSearch }) => {
    const dispatch = useDispatch();
    const searchValue = useSelector(getSearchValue);
    const isBurger = useSelector(getBurger);
    const isDarkTheme = useSelector(getDarkTheme);

    const handleShowModal = () => {
        dispatch(TOGGLE_MODAL_ACTION)
    }

    const handleBurger = () => {
        dispatch(TOGGLE_BURGER_ACTION);
    }

    const handleChangeTheme = () => {
        dispatch(TOGGLE_DARK_THEME_ACTION);
    }

    return (
        <header className={`header${isDarkTheme ? ' header_dark' : ''}`}>
            <div className="wrapper">
                <div className="header__container">
                    <div className="header__logo">
                        <Link to="/" className={`logo${isDarkTheme ? ' logo_dark' : ''}`}>BOOKSTORE</Link>
                    </div>
                    <div className="header__search">
                        <input type="text" className="header__search__input" placeholder='Search' onInput={handleSearch} />
                        <Link to={`/search/${searchValue}`} className="">
                            <img src={isDarkTheme ? magglassW : magglassB} className="header__search__icon icon" />
                        </Link>
                    </div>
                    <div className="header__burger" onClick={handleBurger}>
                        <button className={`hamburger hamburger--collapse${isBurger ? ' is-active' : ''}`} type="button">
                            <span className="hamburger-box">
                                <span className={`hamburger-inner${isDarkTheme ? ' hamburger-inner_dark' : ''}`}></span>
                            </span>
                        </button>
                    </div>
                    <div className="header__icons">
                        <div className="header__icons__left">
                            <div className="theme-btn" onClick={handleChangeTheme}>
                                <img src={isDarkTheme ? sun : moon} />
                            </div>
                        </div>
                        <div className="header__icons__right">
                            <div className="icon" onClick={handleShowModal}>
                                <img src={isDarkTheme ? heartW : heartB} />
                            </div>
                            <Link to="/cart" className="icon">
                                <img src={isDarkTheme ? cartW : cartB} />
                            </Link>
                            <Link to="/authorization" className="icon">
                                <img src={isDarkTheme ? personW : personB} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}