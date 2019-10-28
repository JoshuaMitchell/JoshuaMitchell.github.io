"using strict"

class Book {
    constructor(title, author, genre, date, rating) {
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._date = date;
        this._rating = rating;
    }

    getTitle() {
        return this._title;
    }
    getAuthor() {
        return this._author;
    }
    getGenre() {
        return this._genre;
    }
    getDate() {
        return this._date;
    }
    getRating() {
        return this._rating;
    }

    getBookInfo() {
        return `${this._title.bold()} by ${this._author}, genre: ${this._genre}, written in ${this._date}, rated ${this._rating} stars`;
    }
}

// array
books=[];
books.push(new Book("The Fellowship of the Ring", "J. R. R. Tolkien", "Epic High-Fantasy", "1954", "4.8"));
books.push(new Book("Animal Farm", "George Orwell", "Political Satire", "1945", "4.2"));
books.push(new Book("American Born Chinese", "Gene Luen Yang", "Graphic Novel", "2006", "4.2"));
books.push(new Book("Adventures of Huckleberry Finn", "Mark Twain", "Picaresque Novel", "1884", "4"));
books.push(new Book("Hunter x Hunter Vol. 1", "Yoshihiro Togashi", "Adventure", "1998", "4.5"));

let bookInfo = document.getElementById("image-text");
let contentSpace = document.getElementById("image-block");
for (book of books) {
    console.log(book.getBookInfo());
    contentSpace.append(bookInfo);
    bookInfo = book.getBookInfo();
}
