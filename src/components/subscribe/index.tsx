import { FC } from "react";
import "./index.scss";

export const Subscribe: FC = () => {
    return (
        <div className="subscribe">
            <div className="subscribe__content">
                <h3 className="subscribe__title">SUBSCRIBE TO NEWSLETTER</h3>
                <p className="subscribe__subtitle">Be the first to know about new IT books, upcoming releases, exclusive orders and more.</p>
                <div className="subscribe__input-container">
                    <input type="email" className="subscribe__input-container__input" placeholder="Your Email" />
                    <input type="button" className="subscribe__input-container__btn" value="SUBSCRIBE" />
                </div>
            </div>
        </div>
    )
}