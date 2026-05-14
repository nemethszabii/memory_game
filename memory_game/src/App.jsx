import { useEffect, useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [flipCounter, setFlipCounter] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedContent, setFlippedContent] = useState([]);
  const [symbolsToLeaveOut, setSymbolsToLeaveOut] = useState([]);

  const handleReset = () => {
    const [first, second] = flippedContent;
    if (flippedContent.length === 2 && first === second) {
      setSymbolsToLeaveOut((prev) => [...prev, first]);
    }
    setFlipCounter(0);
    setFlippedCards([]);
    setFlippedContent([]);
  };

  return (
    <div className="app-container">
      <Toaster />
      <h1>Memory Game</h1>
      <Matrix
        flipCounter={flipCounter}
        setFlipCounter={setFlipCounter}
        flippedCards={flippedCards}
        setFlippedCards={setFlippedCards}
        setFlippedContent={setFlippedContent}
        symbolsToLeaveOut={symbolsToLeaveOut}
      />
      {flipCounter == 2 && (
        <div className="msg-container">
          {flippedContent[0] == flippedContent[1] ? (
            <span>It is a match!</span>
          ) : (
            <span>This didn't work!</span>
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
