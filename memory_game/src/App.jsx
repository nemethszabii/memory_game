import { useEffect, useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [flipCounter, setFlipCounter] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedContent, setFlippedContent] = useState([]);
  const [symbolsToLeaveOut, setSymbolsToLeaveOut] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (flippedContent.length === 2 && event.key == "Enter") {
        const [first, second] = flippedContent;
        if (first === second) {
          setScore((prev) => prev + 1);
          setSymbolsToLeaveOut((prev) => [...prev, first]);
        }
        setFlipCounter(0);
        setFlippedCards([]);
        setFlippedContent([]);
      }
    };
    window.addEventListener("keydown", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleEnterPress);
    };
  });

  const handleReset = () => {
    const [first, second] = flippedContent;
    if (flippedContent.length === 2 && first === second) {
      setScore((prev) => prev + 1);
      setSymbolsToLeaveOut((prev) => [...prev, first]);
    }
    setFlipCounter(0);
    setFlippedCards([]);
    setFlippedContent([]);
  };

  return (
    <div className="app-container">
      <Toaster />
      <h1 style={{ marginBottom: "2px" }}>Memory Game</h1>

      <h2>Score: {score}</h2>

      <div className="msg-container">
        {flippedContent.length === 2 && (
          <>
            {flippedContent[0] == flippedContent[1] ? (
              <span>It is a match!</span>
            ) : (
              <span>This didn't work!</span>
            )}
          </>
        )}
      </div>

      <Matrix
        flipCounter={flipCounter}
        setFlipCounter={setFlipCounter}
        flippedCards={flippedCards}
        setFlippedCards={setFlippedCards}
        setFlippedContent={setFlippedContent}
        symbolsToLeaveOut={symbolsToLeaveOut}
      />

      {symbolsToLeaveOut.length > 0 && (
        <>
          Symbols found:{" "}
          <div className="symbol-container">
            {symbolsToLeaveOut.map((symbol, index) => (
              <span key={index}>{symbol}</span>
            ))}
          </div>
        </>
      )}

      {flippedContent.length === 2 && <span>Press Enter to continue...</span>}
    </div>
  );
}

export default App;
