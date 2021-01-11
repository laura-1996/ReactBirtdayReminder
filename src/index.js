import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { data } from './books';
import Book from './book';



function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index)=> {
        const {img,title,author} = book;
        return (
          <Book key={book.id} book={book}></Book>
          );
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
