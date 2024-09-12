import { useState, useCallback } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Slider } from "./components/ui/slider";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";

function App() {
  const [length, setlength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPass(pass);
  }, [length, num, char, setPass]);

  return (
    <>
      <div className="flex-full max-w-md mx-auto shadow-md rounded-xl px-4 py-1 my-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-white text-center p-2 ">Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-4 p-3 bg-black m-2 justify-center">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 rounded-xl"
            placeholder="Password"
            readOnly
          />
          <Button className="outline-none bg-black px-3 py-0.5 shrink-0 rounded-xl">
            Copy
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-4 text-sm">
            <input
              type="range"
              className="cursor-pointer px-2 py-1"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label className="text-lg font-bold text-[#1F1F1F] whitespace-nowrap">
              Length: {length}
            </label>
        </div>
        <div className="flex items-center justify-center space-x-4 text-sm">
            <input 
              type="checkbox"
              defaultChecked = {num}
              id="numInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label className="text-lg font-bold text-[#1F1F1F] whitespace-nowrap" htmlFor="numInput">
              Number
            </label>

            <input 
              type="checkbox"
              defaultChecked = {char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label className="text-lg font-bold text-[#1F1F1F] whitespace-nowrap" htmlFor="charInput">
              Character
            </label>

        </div>

      </div>
    </>
  );
}

export default App;
