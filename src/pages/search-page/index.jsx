import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import longArrow from '../book-page/img/longArrowB.png';
import "./index.scss";
import { addBooksMiddlewareAction } from "../../store/actions";
import { Spinner } from "../../components/spinner";
import { BookCard } from "../../components/book-card";
import { Pagination } from "../../components/pagination";

export const SearchPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchValue = useSelector(state => state.searchValue);
    const books = useSelector((state) => state.books.content);
    const total = useSelector((state) => state.books.total);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(addBooksMiddlewareAction(searchValue, page))
    }, [])

    const handleChangePage = (newPage) => {
        dispatch(addBooksMiddlewareAction(searchValue, newPage))
        setPage(page + 1);
    }

    const handleGoBack = () => {
        navigate("/");
    }

    if (!books) {
        return <Spinner />
    }

    return (
        <div className="wrapper">
            <div className="search">
                <div className="book-page__go-back">
                    <img src={longArrow} onClick={handleGoBack} />
                </div>
                <h1 className="search__title">Search results for "{searchValue}"</h1>
                <div className="books">
                    {books
                        .map((item, index) => {
                            return <BookCard book={item} key={index} />
                        }).slice(0, 9)}
                </div>
            </div>

            <Pagination count={total} page={page} handleChangePage={handleChangePage} />
        </div>
    )
}