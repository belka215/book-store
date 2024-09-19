import { ADD_BOOKS, ADD_DETAILED_BOOK, ADD_SEARCH_VALUE, ADD_TO_CART, ADD_TO_FAVORITES, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from "../store/actions";
import { BooksType, BookType } from "./book";

interface IAddBooksAction {
    type: typeof ADD_BOOKS;
    payload: BooksType;
}

interface IAddDetailedBookAction {
    type: typeof ADD_DETAILED_BOOK;
    payload: BookType;
}

interface IAddToCartAction {
    type: typeof ADD_TO_CART;
    payload: BookType;
}

interface IAddToFavoritesAction {
    type: typeof ADD_TO_FAVORITES;
    payload: BookType;
}

interface IRemoveFromFavoritesAction {
    type: typeof REMOVE_FROM_FAVORITES;
    payload: BookType;
}

interface IRemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: BookType;
}

interface IAddSearchValue {
    type: typeof ADD_SEARCH_VALUE;
    payload: string;
}

export type BookAction = IAddBooksAction | IAddDetailedBookAction | IAddToCartAction | IAddToFavoritesAction | IRemoveFromFavoritesAction | IRemoveFromCartAction;
export type SearchAction = IAddSearchValue;