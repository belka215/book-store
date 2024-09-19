import { FC, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./index.scss";
import { signUpMiddlewareAction } from "../../store/actions";
import { AppDispatch } from "../../store";
import { IAuth } from "../../typings/auth";

export const SignUp: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState<IAuth>({ login: '', email: '', password: '' });

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>, field: string) => {
        setValues((prevState) => ({ ...prevState, [field]: event.target.value }))
    }

    const handleSignUp = () => {
        dispatch(signUpMiddlewareAction(values));
        navigate("/");
    }

    return (
        <div className="sign-up">
            <h2 className="sign-in__title">Sign Up</h2>
            <div className="form-container">
                <div className="sign-in__form">
                    <label htmlFor="login" className="label"><b>Login</b></label>
                    <input
                        type="text"
                        placeholder="Enter login"
                        name="login"
                        className="input"
                        onChange={(event) => handleChangeText(event, 'login')}
                        required
                    />
                    <label htmlFor="email" className="label"><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        className="input"
                        onChange={(event) => handleChangeText(event, 'email')}
                        required
                    />
                    <label htmlFor="psw" className="label"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        className="input"
                        onChange={(event) => handleChangeText(event, 'password')}
                        required
                    />
                    <label htmlFor="psw" className="label"><b>Confirm Password</b></label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="psw"
                        className="input"
                        onChange={(event) => handleChangeText(event, 'confirmPassword')}
                        required
                    />
                    <div>
                        <button
                            className="sign-in__btn"
                            onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                    <div className="sign-up-container">
                        <p className="">Already have an account?
                            <Link to="/authorization" className="btn_underline"> Sign in</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}