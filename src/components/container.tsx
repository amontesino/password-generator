import { useEffect } from "react"
import { characters } from "../data/characters"

export default function Container() {

    let parsedCharacters: Array<string> = characters

    function genPass(array: Array<string>) {
        console.log(array)
    }

    useEffect(() => {
        parsedCharacters = characters

        if (document.querySelector('#symbol-check')?.ariaChecked && !document.querySelector('#number-check')?.ariaChecked) {
            parsedCharacters.splice(62, 29)
        }
        if (document.querySelector('#number-check')?.ariaChecked && !document.querySelector('#symbol-check')?.ariaChecked) {
            parsedCharacters.splice(52, 10)
        }
        if (document.querySelector('#number-check')?.ariaChecked && document.querySelector('#symbol-check')?.ariaChecked) {
            parsedCharacters.splice(52, 39)
        }
    }, [])

    return (
        <div className="container">
            <h1>Generate a</h1>
            <h1 className="header">random password</h1>
            <h2>Never use an insecure password again.</h2>
            <input type="range" min="8" max="32" placeholder="15" className="slider" id="pass-length" />
            <p id="output-length"></p>
            <div className="checkboxes">
                <input type="checkbox" id="symbol-check" />
                <label htmlFor="symbol-check">Use symbols?</label>
                <input type="checkbox" id="number-check" />
                <label htmlFor="number-check">Use numbers?</label>
            </div>
            <button onClick={() => genPass(parsedCharacters)}>Generate passwords</button>
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