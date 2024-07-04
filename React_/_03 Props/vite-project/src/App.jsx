import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ex from "./Ex";
function App() {
  function xyz(name, des, see, img) {
    this.name = name;
    this.des = des;
    this.see = see;
    this.img = img;
  }

  let obj1 = new xyz(
    "rima",
    "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, eligendi",
    "1st view",
    "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500& "
  );
  let obj2 = new xyz(
    "niya",
    "     sectetur adipisicing elit. Eveniet, eligendiipsum dolor sit, amet con",
    "2st view",
    "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  );
  let array = [665, 4984, 68, 165, 1654, 6544, 5];
  return (
    <>
      <h5 className=" mb-5 bg-white text-black text-5xl ">hello</h5>
      <Ex obj={obj1} />
      <Ex obj={obj2} />
    </>
  );
}

export default App;
