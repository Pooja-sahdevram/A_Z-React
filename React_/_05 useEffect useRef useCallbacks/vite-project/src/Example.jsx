import React, { useCallback, useEffect, useRef, useState } from "react";

function Example() {
  const [length, setlength] = useState(8);
  const [NumbberAllowed, setnumberAllowed] = useState(false);
  const [charterAllowes, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordgenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (!NumbberAllowed) {
      str += "0123456789";
    }
    if (!charterAllowes) {
      str += "!@#$%^&*()[]";
    }

    for (let i = 0; i < length; i++) {
      let randompassword = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randompassword);
    }
    setPassword(pass);
  }, [length, NumbberAllowed, charterAllowes, setPassword]);

  let copypass = useRef(null);
  const copyclickfxn = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    copypass.current?.select();
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, NumbberAllowed, charterAllowes, passwordgenerator]);
  return (
    <div className="bg-black h-screen flex justify-center items-center  ">
      <div className=" ">
        <h1>password Generator</h1>
        <div className=" rounded-full">
          <input
            type="text"
            className="outline-none px-3 py-2 w-3/4  "
            readOnly
            placeholder="password"
            value={password}
            ref={copypass}
          />
          <button className="bg-blue-600  px-3 py-2" onClick={copyclickfxn}>
            click
          </button>
        </div>

        <div className="flex gap-2">
          <div className="gap-2 flex text-orange-500 text-lg">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="">length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={NumbberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">numberAllowed</label>{" "}
            <input
              type="checkbox"
              defaultChecked={charterAllowes}
              id="ch"
              onChange={() => {
                setcharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">charcterAllowed</label>;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
