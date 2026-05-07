import { useState } from "react";
import "./App.css";
import Matrix from "./components/Matrix";

function App() {
  const [endRound, setEndRound] = useState(false);
  const [match, setMatch] = useState(false);
  const [flipCounter, setFlipCounter] = useState(0);

  const handleUserClick = () => {
    setFlipCounter(0);
    setMatch(false);
    setEndRound(true);
  };

  return (
    <div className="app-container">
      <h1>Memory Game</h1>
      <Matrix
        setMatch={setMatch}
        flipCounter={flipCounter}
        setFlipCounter={setFlipCounter}
        endRound={endRound}
      />
      {flipCounter == 2 && (
        <div className="msg-container">
          {match ? (
            <span>It is a match!</span>
          ) : (
            <span>It is not a match!</span>
          )}
          <button onClick={handleUserClick} className="btn-user">
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
