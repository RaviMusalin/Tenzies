import Die from "./components/Die"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

/**
     * Challenge part 2:
     * 1. Create a new `gameWon` variable.
     * 2. If `gameWon` is true, change the button text to
     *    "New Game" instead of "Roll"
     */

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
      
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                    value: Math.ceil(Math.random() * 6), 
                    isHeld: false,
                    id: nanoid()
                }))
    }

    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die => 
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generateAllNewDice())
        }
        
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die
            }))
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
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
                </button>
        </main>
    )
}