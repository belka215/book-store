import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooksMiddlewareAction } from "../../store/actions";
import { Spinner } from "../spinner";
import { BookCard } from "../book-card";
import { Pagination } from "../pagination";
import { getBooks, getTotal } from "../../store/selectors";
import { BookType } from "../../typings/book";
import { AppDispatch } from "../../store";
import './index.scss';

export const BooksList: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const books = useSelector(getBooks);
    const total = useSelector(getTotal);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        dispatch(addBooksMiddlewareAction('pro', page))
    }, [])

    const handleChangePage = (newPage: number) => {
        dispatch(addBooksMiddlewareAction('pro', newPage))
        setPage(newPage);
    }

    if (!books) {
        return <Spinner />
    }

    return (
        <div className="book-list">
            <div className="books">
                {books
                    .map((item: BookType, index: number) => {
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