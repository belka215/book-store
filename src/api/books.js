import { addBooksAction, addDetailedBookAction } from "../store/actions";

export const fetchBooks = (dispatch, searchValue, page) => {
    const URL = `https://api.itbook.store/1.0/search/${searchValue}/${page}`;
    
    fetch(URL)
        .then((response) => response.json())
        .then(({ books, total }) => {
            dispatch(addBooksAction(books, total))
        })
        .catch((e) => {
            console.log(e);
        });
}

export const fetchDetailedBook = (dispatch, isbn) => {
    const URL = `https://api.itbook.store/1.0/books/${isbn}`;

    fetch(URL)
        .then((response) => response.json())
        .then((response) => dispatch(addDetailedBookAction(response)))
        .catch((e) => console.log(e));
}