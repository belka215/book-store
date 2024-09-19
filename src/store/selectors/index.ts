import { AppStore } from "..";

export const getDarkTheme = (state: AppStore) => state.darkTheme;
export const getBurger = (state: AppStore) => state.burger;
export const getModal = (state: AppStore) => state.modal;
export const getSearchValue = (state: AppStore) => state.searchValue;
export const getBooks = (state: AppStore) => state.books.content;
export const getTotal = (state: AppStore) => state.books.total;
export const getLikedBooks = (state: AppStore) => state.likedBooks;
export const getAuth = (state: AppStore) => state.isAuth;
export const getDetailedBook = (state: AppStore) => state.detailedBook;