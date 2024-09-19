export type BookType = {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

export type BooksType = {
    books: BookType[];
    total: number;
}

export interface IBookComponent {
    book: BookType;
}

export interface IDetailedBook {
    error?: number;
    title?: string;
    subtitle?: string;
    authors?: string;
    publisher?:string;
    isbn10?: number;
    isbn13?: string;
    pages?: number;
    year?: number;
    rating?: number;
    desc?: string;
    price?: string;
    image?: string;
    url?: string;
    pdf?: object;
}