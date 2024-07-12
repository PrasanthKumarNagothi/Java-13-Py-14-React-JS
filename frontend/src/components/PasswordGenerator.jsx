import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumbersAllowed, setNumbersAllowed] = useState(false);
  const [isSpecialCharactersAllowed, setSpecialCharactersAllowed] =
    useState(false);

  useEffect(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumbersAllowed) characters += "0123456789";
    if (isSpecialCharactersAllowed) characters += "!@#$%^&*()[]{}+";
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  }, [length, isNumbersAllowed, isSpecialCharactersAllowed]);

  return (
    <div className="container">
      <div className="card">
        <form className="m-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={password}
              readOnly
            />
            <button className="btn btn-danger">Copy</button>
          </div>
          <div className="mt-3">
            <div className="d-flex gap-3 align-items-center">
              <input
                type="range"
                min={4}
                max={30}
                value={length}
                onChange={(e) => {setLength(e.target.value)}}
              />
              <span>Length : {length}</span>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="numbers"
                  className="form-check-input"
                  onChange={(e) => {setNumbersAllowed((prev) => !prev)}}
                  defaultChecked = {isNumbersAllowed}
                />
                <label htmlFor="numbers">Numbers</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="special"
                  onChange={(e) => {setSpecialCharactersAllowed((prev) => !prev)}}
                  defaultChecked = {isSpecialCharactersAllowed}
                />
                <label htmlFor="special">Special Characters</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordGenerator;
