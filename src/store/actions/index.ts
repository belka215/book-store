import { AppDispatch } from "..";
import { fetchBooks, fetchDetailedBook } from "../../api/books";
import { BookAction, SearchAction } from "../../typings/actions";
import { IAuth } from "../../typings/auth";
import { BookType } from "../../typings/book";

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

export const addBooksAction = (books: BookType[], total: number): BookAction => ({ type: ADD_BOOKS, payload: { books, total } });
export const addDetailedBookAction = (book: BookType): BookAction => ({ type: ADD_DETAILED_BOOK, payload: book });
export const addToFavorites = (book: BookType): BookAction => ({ type: ADD_TO_FAVORITES, payload: book });
export const removeFromFavorites = (book: BookType): BookAction => ({ type: REMOVE_FROM_FAVORITES, payload: book });
export const addToCart = (book: BookType): BookAction => ({ type: ADD_TO_CART, payload: book });
export const removeFromCart = (book: BookType): BookAction => ({ type: REMOVE_FROM_CART, payload: book });
export const addSearchValue = (searchValue: string): SearchAction => ({ type: ADD_SEARCH_VALUE, payload: searchValue });

export const addBooksMiddlewareAction = (searchValue: string, page: number) => {
    return (dispatch: AppDispatch) => {
        fetchBooks(dispatch, searchValue, page);
    }
}

export const addDetailedBookMiddlewareAction = (isbn: number) => {
    return (dispatch: AppDispatch) => {
        fetchDetailedBook(dispatch, isbn);
    }
}

let num = 0;

export const signUpMiddlewareAction = ({ login, email, password }: IAuth) => {
    return (dispatch: AppDispatch) => {
        dispatch(AUTH_ACTION);

        const data = {
            username: login,
            email,
            password,
        };
        ++num;
        localStorage.setItem(`user${num}`, JSON.stringify(data));

        console.log(num)
    };
};

