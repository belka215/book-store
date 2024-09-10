import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import longArrow from '../book-page/img/longArrowB.png';
import './index.scss';
import { SignIn } from "../../components/sign-in";

export const AuthPage = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.isAuth);

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
                {isAuth && <p>You are authorized!</p>}
            </div>
        </div>
    )
}