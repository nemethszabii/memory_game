import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/matrix.css";

const Matrix = ({ setMatch, flipCounter, setFlipCounter, endRound }) => {
  const symbols = ["✏️", "⚙️", "🤖", "🔍", "🎮", "⌛", "🎨", "🍔", "🛹", "🍩"];
  const [pickedSymbols, setPickedSymbols] = useState({
    first: "",
    second: "",
  });

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function createMatrix() {
    let doubled = doubleArray(symbols);
    shuffle(doubled);
    return doubled;
  }

  function doubleArray(array) {
    let newArray = [array.length * 2];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
      counter++;
    }

    let j = 0;
    while (j < array.length) {
      newArray[counter] = array[j];
      counter++;
      j++;
    }
    return newArray;
  }

  const [matrix, setMatrix] = useState(() => createMatrix());

  useEffect(() => {
    const checkIfMatch = () => {
      if (pickedSymbols.first == pickedSymbols.second) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    };

    if (flipCounter == 2) {
      checkIfMatch();
    }
  }, [flipCounter, pickedSymbols, setMatch]);

  return (
    <>
      <div className="matrix-container">
        {matrix.map((symbol, index) => (
          <Card
            key={index}
            content={symbol}
            flipCounter={flipCounter}
            setFlipCounter={setFlipCounter}
            setPickedSymbols={setPickedSymbols}
            endRound={endRound}
          />
        ))}
      </div>
    </>
  );
};

export default Matrix;
