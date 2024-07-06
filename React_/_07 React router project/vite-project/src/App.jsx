import { useState } from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import BookList from "./components/home/BookList";
import Books from "./components/home/Books";
import NewBook from "./components/home/NewBook";
import NotFoundpage from "./components/home/NotFoundpage";
import BookLayoutcomponent from "./components/home/BookLayoutcomponent";
import Login from "./components/home/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* // this routes 1st route */}
      <Routes>
        <Route path="/" element={<h1>extra contento</h1>} />
      </Routes>
      <nav>
        <ul className="text-blue-800 text center  flex justify-between w-96  items-center underline">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-blue-500"
            }
            to="/"
          >
            {({ isActive }) => (isActive ? "Active Home" : "Home")}
          </NavLink>
          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>{" "}
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
          <Link to="/books">
            {" "}
            <li>books</li>
          </Link>{" "}
        </ul>
      </nav>
      <Header />
      {/* secondroutes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/books/:id" element={<Books />} />
        <Route path="/books/new" element={<NewBook />} /> */}

        <Route path="/books" element={<BookLayoutcomponent />}>
          {/* <Route index element={<BookList />} /> */}
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<NotFoundpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
