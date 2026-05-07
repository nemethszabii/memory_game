import React, { useState } from "react";
import "../styles/card.css";

const Card = ({ content, flipCounter, setFlipCounter }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipCounter < 2 && !isFlipped) {
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
