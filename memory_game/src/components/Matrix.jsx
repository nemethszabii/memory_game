import { useState } from "react";
import Card from "./Card";
import "../styles/matrix.css";

const Matrix = ({
  setFlipCounter,
  flippedCards,
  setFlippedCards,
  setFlippedContent,
}) => {
  const symbols = ["✏️", "⚙️", "🤖", "🔍", "🎮", "⌛", "🎨", "🍔", "🛹", "🍩"];

  const handleCardClick = (index, symbol) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);
      setFlippedContent((prev) => [...prev, symbol]);
      setFlipCounter((prev) => prev + 1);
    }
    console.log(flippedCards);
  };

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

  return (
    <>
      <div className="matrix-container">
        {matrix.map((symbol, index) => (
          <Card
            key={index}
            content={symbol}
            isFlipped={flippedCards.includes(index)}
            onClick={() => handleCardClick(index, symbol)}
          />
        ))}
      </div>
    </>
  );
};

export default Matrix;
