import { useSelector } from "react-redux";
import './index.scss';

export const Footer = () => {
    const isDarkTheme = useSelector(state => state.darkTheme);

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