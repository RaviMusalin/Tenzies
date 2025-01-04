import Die from "./components/Die"
import { useState } from "react"

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
*/

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                    value: Math.ceil(Math.random() * 6), 
                    isHeld: false
                }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    let diceElements = dice.map(dieObject => <Die value={dieObject.value}/>)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>

            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
}