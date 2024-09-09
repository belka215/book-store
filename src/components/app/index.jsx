import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MainPage } from "../../pages/main-page";
import { Header } from "../header";
import { Footer } from "../footer";
import { BookPage } from "../../pages/book-page";
import { LikeModal } from '../../components/like-modal';
import { CartPage } from "../../pages/cart-page";
import { SearchPage } from "../../pages/search-page";
import { addSearchValue } from "../../store/actions";
import { NavBar } from "../nav-bar";
import './index.scss';
import { AuthPage } from "../../pages/auth-page";

export const App = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const isBurger = useSelector(state => state.burger);
    const isDarkTheme = useSelector(state => state.darkTheme);

    const handleSearch = (event) => {
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
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}