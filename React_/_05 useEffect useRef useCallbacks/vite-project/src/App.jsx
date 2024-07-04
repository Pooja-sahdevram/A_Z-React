import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charcterAllowed, setcharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charcterAllowed) {
      str += "!@#$%^&*()[]";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charcterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charcterAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copypassword = useCallback(() => {
    window.navigator.clipboard.writeText(Password);
    passwordRef.current?.select();

    //if want to slect 3 value only
    passwordRef.current?.setSelectionRange(0, 20);
  }, [Password]);
  return (
    <div className="bg-black h-screen  justify-center max-auto font-bold w-full text-xl p-5  text-orange-500 text-center">
      <div className="bg-gray-800  m-auto rounded-3xl py-2 ">
        <h1 className="m-5">Password Generator</h1>

        <div className=" text-black flex bg-blue-900  rounded-lg conatiner   w-1/3  m-auto">
          <input
            type="text"
            value={Password}
            className=" bg-white outline-none w-full py-1 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none text-xl px-3 py-1 shrink-0  text-white"
            onClick={copypassword}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 justify-center mt-10">
          <div className="  flex item-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="Length">{length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">NumberAllowed</label>{" "}
            <input
              type="checkbox"
              defaultChecked={charcterAllowed}
              id="charcterInput"
              onChange={() => {
                setcharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charcterInput">CharacterAllowed</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
