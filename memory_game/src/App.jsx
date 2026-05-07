import { useEffect, useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";

function App() {
  const [isMatch, setIsMatch] = useState(false);
  const [flipCounter, setFlipCounter] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedContent, setFlippedContent] = useState([]);

  const handleReset = () => {
    setFlipCounter(0);
    setIsMatch(false);
    setFlippedCards([]);
    setFlippedContent([]);
  };

  useEffect(() => {
    if (flipCounter == 2) {
      console.log(flippedContent);
      setIsMatch(flippedContent[0] == flippedContent[1]);
    }
  }, [flipCounter, flippedContent, setIsMatch]);

  return (
    <div className="app-container">
      <h1>Memory Game</h1>
      <Matrix
        setIsMatch={isMatch}
        flipCounter={flipCounter}
        setFlipCounter={setFlipCounter}
        flippedCards={flippedCards}
        setFlippedCards={setFlippedCards}
        setFlippedContent={setFlippedContent}
      />
      {flipCounter == 2 && (
        <div className="msg-container">
          {isMatch ? (
            <span>It is a match!</span>
          ) : (
            <span>It is not a match!</span>
          )}
          <button onClick={handleReset} className="btn-user">
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
