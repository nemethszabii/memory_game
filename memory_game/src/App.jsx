import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [flipCounter, setFlipCounter] = useState(0);
  const symbols = ["✏️", "⚙️", "🤖", "🔍", "🎮", "⌛", "🎨", "🍔", "🛹", "🍩"];

  const createMatrix = () => {
    let matrix = [
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let counter = 0;
        while (counter < symbols.length) {
          //matrix[(i, j)] = Math.floor(Math.random() * symbols.length);
          counter++;
        }
      }
    }
    doesContainTwice(matrix);
    return matrix;
  };

  const doesContainTwice = (matrix, symbol) => {
    let counter = 0;
    let i = 0;
    let j = 0;
    while (i < matrix.length) {
      while (j < matrix[i].length) {
        if (matrix[(i, j)] == symbol) {
          counter++;
        }
      }
    }
    return counter == 2;
  };

  return (
    <div className="app-container">
      <h1>Memory Game</h1>
      <div className="game-container">
        {symbols.map((symbol, index) => (
          <Card
            key={index}
            content={symbol}
            flipCounter={flipCounter}
            setFlipCounter={setFlipCounter}
          />
        ))}
      </div>
      <button className="create-btn" onClick={createMatrix}>
        Create Matrix
      </button>
    </div>
  );
}

export default App;
