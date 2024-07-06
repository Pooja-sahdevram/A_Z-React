import React from "react";
import { useOutletContext, Link, useParams } from "react-router-dom";

function Books() {
  const { id } = useParams();
  const { hello } = useOutletContext(); // Destructure `hello` correctly from the context

  return (
    <div className="flex justify-center text-pink-800 text-3xl italic bold">
      <h1>
        Book{id} {hello}
      </h1>
    </div>
  );
}

export default Books;
