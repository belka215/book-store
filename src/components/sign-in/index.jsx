import React, { useState } from "react";
import './index.scss';

export const SignIn = () => {
    const [values, setValues] = useState({});

    const handleChangeEmail = (event) => {
        setValues((prevState) => ({ ...prevState, email: event.target.value }));
        console.log(values)
    }

    const handleChangePass = (event) => {
        setValues((prevState) => ({ ...prevState, password: event.target.value }));
        console.log(values)
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
                        // setIsShowModal={setIsShowModal}
                        values={values}
                    >
                        Sign In
                    </button>
                    <div className="sign-up-container">
                        <p className="">Don't have an account?
                            <span className="btn_underline"> Sign up</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}