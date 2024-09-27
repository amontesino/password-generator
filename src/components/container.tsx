import { useState } from "react";
import { characters } from "../data/characters";

export default function Container() {
  const [numberCheck, setNumberCheck] = useState(false);
  const [symbolCheck, setSymbolCheck] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [length, setLength] = useState(15);

  const genPass = () => {
    // Uppercase and lowercase letters
    let selectedChars = characters.slice(0, 52);
    let passwordOne = "";
    let passwordTwo = "";

    // Add numbers if numberCheck is true
    if (numberCheck) {
      selectedChars = selectedChars.concat(characters.slice(52, 62));
    }

    // Add symbols if symbolCheck is true
    if (symbolCheck) {
      selectedChars = selectedChars.concat(characters.slice(62));
    }

    console.log(selectedChars);
    console.log(`symbol check: ${symbolCheck}, number check: ${numberCheck}`);

    for (let i = 0; i < length; i++) {
      passwordOne =
        passwordOne +
        selectedChars[Math.floor(Math.random() * selectedChars.length)];
      passwordTwo =
        passwordTwo +
        selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }

    console.log(passwordOne, passwordTwo);
    setPasswords([passwordOne, passwordTwo]);
  };

  return (
    <div className='container'>
      <h1>Generate a</h1>
      <h1 className='header-purple'>random password</h1>
      <h2>Never use an insecure password again.</h2>
      <input
        type='range'
        min='8'
        max='40'
        placeholder={JSON.stringify(length)}
        defaultValue={JSON.stringify(length)}
        className='slider'
        id='pass-length'
        onChange={(e) => setLength(e.target.value)}
      />
      <p id='output-length'>Length: {length} characters</p>
      <div className='checkboxes'>
        <label htmlFor='symbol-check'>
          <input
            type='checkbox'
            id='symbol-check'
            onChange={() => setSymbolCheck((prevCheck) => !prevCheck)}
          />
          <span className='checkmark' />
          Use symbols?
        </label>
        <label htmlFor='number-check'>
          <input
            type='checkbox'
            id='number-check'
            onChange={() => setNumberCheck((prevCheck) => !prevCheck)}
          />
          <span className='checkmark' />
          Use numbers?
        </label>
      </div>
      <button onClick={() => genPass()}>Generate passwords</button>
      <div id='line'></div>
      <div className='fields'>
        <div
          className='passField'
          id='pass-one'
          onClick={() => navigator.clipboard.writeText(passwords[0])}
        >
          {passwords[0]}
        </div>
        <div
          className='passField'
          id='pass-two'
          onClick={() => navigator.clipboard.writeText(passwords[1])}
        >
          {passwords[1]}
        </div>
      </div>
      <p id='copy-confirm'>Click to copy passwords!</p>
      <script src='index.js'></script>
    </div>
  );
}
