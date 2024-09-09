import { useNavigate } from "react-router-dom";
import longArrow from '../book-page/img/longArrowB.png';
import './index.scss';
import { SignIn } from "../../components/sign-in";
import { SignUp } from "../../components/sign-up";

export const AuthPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="wrapper">
            <div className="auth">
                <div className="book-page__go-back">
                    <img src={longArrow} onClick={handleGoBack} />
                </div>
                {/* <SignIn /> */}
                <SignUp />
            </div>
        </div>
    )
}