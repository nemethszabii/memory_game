import React, { useEffect, useState } from "react";
import "../styles/card.css";

const Card = ({
  content,
  flipCounter,
  setFlipCounter,
  setPickedSymbols,
  endRound,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipCounter < 2 && !isFlipped) {
      if (flipCounter == 0) {
        setPickedSymbols((prev) => ({ ...prev, first: content }));
      } else if (flipCounter == 1) {
        setPickedSymbols((prev) => ({ ...prev, second: content }));
      }
      setFlipCounter((prev) => prev + 1);
      setIsFlipped(true);
    } else if (flipCounter < 2 && isFlipped) {
      alert("Already flipped!");
    } else if (flipCounter == 2 && !isFlipped) {
      alert("Can not flip more!");
    } else {
      alert("Both should flip back automatically. Not implemented yet.");
    }
  };

  useEffect(() => {
    if (endRound) {
      setIsFlipped(false);
      setPickedSymbols({});
    }
  }, [endRound, setPickedSymbols]);

  return (
    <div
      className={!isFlipped && flipCounter == 2 ? "disabled" : "card"}
      onClick={handleFlip}
    >
      {isFlipped && content}
    </div>
  );
};

export default Card;
