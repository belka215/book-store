import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TOGGLE_BURGER_ACTION } from "../../store/actions";
import personB from "../header/img/person-black.png";
import bookB from './img/bookB.png'
import cartB from '../header/img/cart-black.png';
import { AppDispatch } from "../../store";
import './index.scss';


export const NavBar: FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const handleClick = (page: string) => {
        return () => {
            dispatch(TOGGLE_BURGER_ACTION);
            navigate(`/${page}`);
        }
    }

    return (
        <nav className="nav-bar">
            <div className="wrapper">
                <ul className="nav-bar__content">
                    <li className="nav-bar__item" onClick={handleClick('')}>
                        <div className="nav-bar__item__logo">
                            <img src={bookB} alt="" />
                        </div>
                        <p className="nav-bar__item__title">Main Page</p>
                    </li>
                    <li className="nav-bar__item">
                        <div className="nav-bar__item__logo">
                            <img src={personB} alt="" />
                        </div>
                        <p className="nav-bar__item__title">Account</p>
                    </li>
                    <li className="nav-bar__item" onClick={handleClick('cart')}>
                        <div className="nav-bar__item__logo">
                            <img src={cartB} alt="" />
                        </div>
                        <p className="nav-bar__item__title">Cart</p>
                    </li>
                    <li className="nav-bar__item"></li>
                    <li className="nav-bar__item"></li>
                </ul>
            </div>
        </nav>
    )
}