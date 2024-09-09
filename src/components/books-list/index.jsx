import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooksMiddlewareAction } from "../../store/actions";
import { Spinner } from "../spinner";
import { BookCard } from "../book-card";
import './index.scss';
import { Pagination } from "../pagination";

export const BooksList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.content);
    const total = useSelector((state) => state.books.total);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(addBooksMiddlewareAction('pro', page))
    }, [])

    const handleChangePage = (newPage) => {
        dispatch(addBooksMiddlewareAction('pro', newPage))
        setPage(newPage);
    }

    if (!books) {
        return <Spinner />
    }

    return (
        <div className="wrapper">
            <div className="books">
                {books
                    .map((item, index) => {
                        return <BookCard
                            book={item}
                            key={index}
                        />
                    }).slice(0, 9)}
            </div>
            <Pagination
                count={total}
                page={page}
                handleChangePage={handleChangePage} />
        </div>
    )
}