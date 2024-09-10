import { ADD_BOOKS, ADD_DETAILED_BOOK, ADD_SEARCH_VALUE, ADD_TO_CART, ADD_TO_FAVORITES, AUTH, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES, TOGGLE_BURGER, TOGGLE_DARK_THEME, TOGGLE_MODAL } from "../actions";

const initialState = {
    books: {
        content: [],
        total: 0,
    },
    detailedBook: null,
    likedBooks: [],
    cart: [],
    modal: false,
    searchValue: '',
    burger: false,
    darkTheme: false,
    isAuth: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS:
            return {
                ...state,
                books: {
                    content: action.payload.books,
                    total: action.payload.total,
                }
            }
        case ADD_DETAILED_BOOK:
            return {
                ...state,
                detailedBook: action.payload,
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                likedBooks: state.likedBooks.find(book => book.isbn13 === action.payload.isbn13) ? state.likedBooks : [...state.likedBooks, action.payload],
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                likedBooks: state.likedBooks.filter(book => book.isbn13 !== action.payload.isbn13)
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                modal: state.modal ? false : true,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.find(book => book.isbn13 === action.payload.isbn13) ? state.cart : [...state.cart, action.payload],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(book => book.isbn13 !== action.payload.isbn13)
            }
        case ADD_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            }
        case TOGGLE_BURGER:
            return {
                ...state,
                burger: !state.burger,
            }
        case TOGGLE_DARK_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme,
            }
        case AUTH:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state;
    }
};