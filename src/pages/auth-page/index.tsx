import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import longArrow from '../book-page/img/longArrowB.png';
import { SignIn } from "../../components/sign-in";
import { getAuth } from "../../store/selectors";
import { Authorized } from "../../components/authorized";
import './index.scss';

export const AuthPage: FC = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(getAuth);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="wrapper">
            <div className="auth">
                <div className="book-page__go-back">
                    <img src={longArrow} onClick={handleGoBack} />
                </div>
                {!isAuth && <SignIn />}
                {isAuth && <Authorized />}
            </div>
        </div>
    )
}