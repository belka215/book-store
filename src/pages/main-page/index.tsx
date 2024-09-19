import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getDarkTheme } from "../../store/selectors";
import { BooksList } from '../../components/books-list';
import { Subscribe } from '../../components/subscribe';
import './index.scss';

export const MainPage: FC = () => {
    const isDarkTheme = useSelector(getDarkTheme);

    return (
        <div className={`main-page${isDarkTheme ? ' main-page_dark' : ''}`}>
            <div className="wrapper">
                <div className="main-page__container">
                    <h1 className={`title${isDarkTheme ? ' title_dark' : ''}`}>NEW RELEASES BOOKS</h1>
                    <BooksList />
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}