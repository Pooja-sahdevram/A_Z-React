import { useState } from "react";

import "./App.css";
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-20  "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded px-3 py-2">
            <button
              className=" px-5 shadow-lg py-2 rounded-full outline-none text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setcolor("red")}
            >
              red
            </button>
            <button
              className=" px-5 shadow-lg py-2 rounded-full outline-none text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              green
            </button>
            <button
              className=" px-5 shadow-lg py-2 rounded-full outline-none text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => setcolor("pink")}
            >
              pink
            </button>
            <button
              className=" px-5 shadow-lg py-2 rounded-full outline-none text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setcolor("blue")}
            >
              blue
            </button>
            <button
              className=" px-5 shadow-lg py-2 rounded-full outline-none text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setcolor("yellow")}
            >
              white
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
