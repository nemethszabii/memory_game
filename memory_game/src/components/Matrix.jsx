import { useMemo } from "react";
import Card from "./Card";

const Matrix = ({
  isRunning,
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
      <div
        className={`bg-slate-900 h-auto w-3xs grid grid-cols-5 gap-3 border-2 border-solid rounded-md shadow-2xl m-3 p-2 ${!isRunning ? "pointer-events-none" : ""}`}
      >
        {matrix.map((symbol, index) => {
          if (symbolsToLeaveOut.includes(symbol)) {
            return (
              <div
                key={index}
                className="border-2 border-solid rounded-md w-full aspect-square"
              ></div>
            );
          }
          return (
            <Card
              flippedCards={flippedCards}
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
