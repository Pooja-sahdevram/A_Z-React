import React from "react";
import { Link, Outlet } from "react-router-dom";
function BookLayoutcomponent() {
  return (
    <div>
      {" "}
      <Link to="/books/1">Book1</Link>
      <Link to="/books/2">Book2</Link>
      <Link to="/books/new">newbook</Link>
      <Outlet context={{ hello: "hello i am the context use me pls!" }} />
    </div>
  );
}

export default BookLayoutcomponent;
