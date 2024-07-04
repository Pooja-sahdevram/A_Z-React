import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  let [count, setCount] = useState(10);

  function dec() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  }

  function inc() {
    if (count < 20) {
      count = count + 1;
      setCount(count);
    }
  }

  return (
    <>
      <h1 className="h">Counter Value: {count}</h1>
      <button onClick={dec}>Decrease</button>
      <button onClick={inc}>Increase</button>
    </>
  );
}

export default App;
