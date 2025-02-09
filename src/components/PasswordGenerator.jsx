import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyClicked, setCopyClicked] = useState(false);
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+{}[]?/>.<,:";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (!password) {
      alert("No password to copy!");
      return;
    }
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied!");
    setCopyClicked(true);

    setTimeout(() => {
      setCopyClicked(false);
    }, 500);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="relative max-w-md mx-auto p-8 shadow-xl rounded-3xl bg-gray-800 border-4 border-transparent bg-clip-border">
        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-2 rounded-3xl animate-gradient-x"></div>

        {/* Card Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl mb-6">Password Generator</h1>

          <div className="mb-6">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-4 rounded-lg bg-gray-600 text-white"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className={`outline-none bg-orange-400 text-white px-6 py-2 mt-4 rounded-full ${copyClicked ? "clicked" : ""}`}
            >
              Copy
            </button>
          </div>

          <p className="italic mb-4">"The best way to predict the future is to create it."</p>

          <div className="flex justify-between text-sm mb-4">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
