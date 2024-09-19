import { FC } from "react";
import { useSelector } from "react-redux";
import { getDarkTheme } from "../../store/selectors";
import './index.scss';

export const Footer: FC = () => {
    const isDarkTheme = useSelector(getDarkTheme);

    return (
        <footer className={`footer${isDarkTheme ? ' footer_dark' : ''}`}>
            <div className="wrapper">
                <div className="footer__container">
                    <div className="footer__left">
                        <p className="footer__text">2022 Bookstore</p>
                    </div>
                    <div className="footer__right">
                        <p className="footer__text">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}