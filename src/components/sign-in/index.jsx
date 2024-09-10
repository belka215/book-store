import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './index.scss';
import { AUTH_ACTION } from "../../store/actions";

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({});

    const handleChangeEmail = (event) => {
        setValues((prevState) => ({ ...prevState, email: event.target.value }));
    }

    const handleChangePass = (event) => {
        setValues((prevState) => ({ ...prevState, password: event.target.value }));
    }

    const handleSignIn = () => {
        console.log(values);
        let array = [];
        let resp;

        Object.keys(localStorage).forEach((key) => {
            array.push(JSON.parse(localStorage.getItem(key)));
            console.log(array)

        });
        if (array.find(user => values.email === user.email && values.password === user.password)) {
            resp = true;
        } else {
            resp = false;
        }

        console.log(resp)

        if (resp) {
            dispatch(AUTH_ACTION);
            navigate("/");
        } else {
            navigate("/sign-up");
        }
    }

    return (
        <div className="sign-in">
            <h2 className="sign-in__title">Sign In</h2>
            <div className="form-container">
                <div className="sign-in__form">
                    <label htmlFor="email" className="label"><b>Email</b></label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleChangeEmail}
                        required
                    />
                    <label htmlFor="psw" className="label"><b>Password</b></label>
                    <input
                        className="input"
                        type="password"
                        placeholder="Your Password"
                        name="psw"
                        onChange={handleChangePass}
                        required
                    />
                    <button className="btn_underline">Forgot password?</button>
                    <button
                        className="sign-in__btn"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                    <div className="sign-up-container">
                        <p className="">Don't have an account?
                            <Link to="/sign-up" className="btn_underline"> Sign up</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}