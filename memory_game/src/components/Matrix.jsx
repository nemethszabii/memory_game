import { useMemo } from "react";
import Card from "./Card";
import "../styles/matrix.css";

const Matrix = ({
  flipCounter,
  setFlipCounter,
  flippedCards,
  setFlippedCards,
  setFlippedContent,
  symbolsToLeaveOut,
}) => {
  const matrix = useMemo(() => {
    const symbols = [
      "✏️",
      "⚙️",
      "🤖",
      "🔍",
      "🎮",
      "⌛",
      "🎨",
      "🍔",
      "🛹",
      "🍩",
    ];
    const doubled = [...symbols, ...symbols];
    shuffle(doubled);
    return doubled;
  }, []);

  const handleCardClick = (index, symbol) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);
      setFlippedContent((prev) => [...prev, symbol]);
      setFlipCounter((prev) => prev + 1);
    }
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

  return (
    <>
      <div className="matrix-container">
        {matrix.map((symbol, index) => {
          if (symbolsToLeaveOut.includes(symbol)) {
            return <div className="found-card"></div>;
          }
          return (
            <Card
              flipCounter={flipCounter}
              key={index}
              content={symbol}
              isFlipped={flippedCards.includes(index)}
              onClick={() => handleCardClick(index, symbol)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Matrix;
