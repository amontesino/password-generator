import { useEffect, useRef, useState } from "react"
import { characters, charactersNoNumbers, charactersNoNumbersNoSymbols, charactersNoSymbols } from "../data/characters"

export default function Container() {
    const [numberCheck, setNumberCheck] = useState(false)
    const [symbolCheck, setSymbolCheck] = useState(false)
    const [characterArray, setCharacterArray] = useState([])

    function genPass(array: Array<string>) {
        // console.log(array)
        // console.log(`symbol check: ${symbolCheck}, number check: ${numberCheck}`)
    }

    useEffect(() => {
        console.log(characterArray)
        console.log(`symbol check: ${symbolCheck}, number check: ${numberCheck}`)

        return () => {
            if (symbolCheck === false && numberCheck) {
                setCharacterArray(charactersNoSymbols)
            } else
            if (numberCheck === false && symbolCheck) {
                setCharacterArray(charactersNoNumbers)
            } else 
            if (numberCheck === false && symbolCheck === false) {
                setCharacterArray(charactersNoNumbersNoSymbols)
            } else {
                setCharacterArray(characters)
            }
        }
    }, [numberCheck, symbolCheck])

    return (
        <div className="container">
            <h1>Generate a</h1>
            <h1 className="header">random password</h1>
            <h2>Never use an insecure password again.</h2>
            <input type="range" min="8" max="32" placeholder="15" className="slider" id="pass-length" />
            <p id="output-length"></p>
            <div className="checkboxes">
                <input type="checkbox" id="symbol-check" onChange={() => setSymbolCheck(prevCheck => !prevCheck)} />
                <label htmlFor="symbol-check">Use symbols?</label>
                <input type="checkbox" id="number-check" onChange={() => setNumberCheck(prevCheck => !prevCheck)} />
                <label htmlFor="number-check">Use numbers?</label>
            </div>
            <button onClick={() => genPass(characterArray)}>Generate passwords</button>
            <div id="line"></div>
            <div className="fields">
                <div className="passField" id="pass-one"></div>
                <div className="passField" id="pass-two"></div>
            </div>
            <p id="copy-confirm">Click to copy passwords!</p>
            <script src="index.js"></script>
        </div>
    )
}