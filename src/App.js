import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"

/**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                    value: Math.ceil(Math.random() * 6), 
                    isHeld: true,
                    id: nanoid()
                }))
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    function hold(id) {
        console.log(id)
    }

    let diceElements = dice.map(dieObj => 
        <Die 
            key={dieObj.id} 
            value={dieObj.value} 
            isHeld={dieObj.isHeld}
            hold = {hold}
            id = {dieObj.id}
            />
        )

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