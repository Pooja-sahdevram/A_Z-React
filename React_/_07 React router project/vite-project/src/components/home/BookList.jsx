import React from "react";
import { Link } from "react-router-dom";
function BookList() {
  return (
    <div className="flex  justify-center flex-col items-center">
      <h2 className=" text-black font-bold text-5xl">Booklist</h2>
      <Link to="/books/1">Book1</Link>
      <Link to="/books/2">Book2</Link>
      <Link to="/books/new">newbook</Link>
    </div>
  );
}

export default BookList;
