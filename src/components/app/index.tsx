import React, { ChangeEvent, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBurger, getDarkTheme, getModal } from "../../store/selectors";
import { MainPage } from "../../pages/main-page";
import { Header } from "../header";
import { Footer } from "../footer";
import { BookPage } from "../../pages/book-page";
import { LikeModal } from '../like-modal';
import { CartPage } from "../../pages/cart-page";
import { SearchPage } from "../../pages/search-page";
import { addSearchValue } from "../../store/actions";
import { NavBar } from "../nav-bar";
import { AuthPage } from "../../pages/auth-page";
import { SignUpPage } from "../../pages/sign-up-page";
import { AppDispatch } from "../../store";
import './index.scss';

export const App: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const modal = useSelector(getModal);
    const isBurger = useSelector(getBurger);
    const isDarkTheme = useSelector(getDarkTheme);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(addSearchValue(event.target.value))
    }

    return (
        <BrowserRouter>
            <Header handleSearch={handleSearch} />
            <main className={`main${isDarkTheme ? ' main_dark' : ''}`}>
                {modal && <LikeModal />}
                {isBurger && <NavBar />}
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="books/:bookIsbn" element={<BookPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="search/:searchValue" element={<SearchPage />} />
                    <Route path="authorization" element={<AuthPage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}