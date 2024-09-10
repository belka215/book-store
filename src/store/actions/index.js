import { fetchBooks, fetchDetailedBook } from "../../api/books";

export const ADD_BOOKS = 'ADD_BOOKS';
export const ADD_DETAILED_BOOK = 'ADD_DETAILED_BOOK';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_SEARCH_VALUE = 'ADD_SEARCH_VALUE';
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';
export const AUTH = "AUTH";

export const TOGGLE_MODAL_ACTION = { type: TOGGLE_MODAL };
export const TOGGLE_BURGER_ACTION = { type: TOGGLE_BURGER };
export const TOGGLE_DARK_THEME_ACTION = { type: TOGGLE_DARK_THEME };
export const AUTH_ACTION = { type: AUTH };

export const addBooksAction = (books, total) => ({ type: ADD_BOOKS, payload: { books, total } });
export const addDetailedBookAction = (book) => ({ type: ADD_DETAILED_BOOK, payload: book });
export const addToFavorites = (book) => ({ type: ADD_TO_FAVORITES, payload: book });
export const removeFromFavorites = (book) => ({ type: REMOVE_FROM_FAVORITES, payload: book });
export const addToCart = (book) => ({ type: ADD_TO_CART, payload: book });
export const removeFromCart = (book) => ({ type: REMOVE_FROM_CART, payload: book });
export const addSearchValue = (searchValue) => ({ type: ADD_SEARCH_VALUE, payload: searchValue });

export const addBooksMiddlewareAction = (searchValue, page) => {
    return (dispatch) => {
        fetchBooks(dispatch, searchValue, page);
    }
}

export const addDetailedBookMiddlewareAction = (isbn) => {
    return (dispatch) => {
        fetchDetailedBook(dispatch, isbn);
    }
}

let num = 1;

export const signUpMiddlewareAction = ({ login, email, password }) => {
    return (dispatch) => {
        dispatch(AUTH_ACTION);

        const data = {
            username: login,
            email,
            password,
        };

        localStorage.setItem(`user${num}`, JSON.stringify(data));
        ++num;
        console.log(num)
    };
};

