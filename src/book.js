import React from 'react'

const Book = (props) => {
    const { img, title, author } = props.book;
    const clickHandler=()=>{
      alert('hello world');
    };
    const complex = (author) => {
      console.log(author);
    }
    return (
      <article className="book" 
      //onMouseOver={()=> console.log(title)}
      >
        <img src={img} alt="book"/>
        <h1 onClick={()=> console.log(title)}>{title} </h1>
        <h4>{author} </h4>
        <button className="btn" type="button" onClick={clickHandler}>Reference</button>
        <button className="btn" type="button" onClick={()=>complex(author)}>Complex
        </button>
      </article>
    );
  };

export default Book
