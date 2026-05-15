import React, { useEffect, useRef, useState } from "react";
import Matrix from "./Matrix";
import toast, { Toaster } from "react-hot-toast";

const MainGame = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [flippedContent, setFlippedContent] = useState([]);
  const [symbolsToLeaveOut, setSymbolsToLeaveOut] = useState([]);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isRunning && score == 10) {
      clearInterval(intervalIdRef);
      setIsRunning(false);
      setSymbolsToLeaveOut([]);
      setScore(0);
      toast.success("Congrats, You won!");
    }
  }, [isRunning, score]);

  function startTimer() {
    intervalIdRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  }

  function formatTime() {
    let min = Math.floor((elapsedTime / 60) % 60);
    let minDisplay = min < 10 ? "0" + min : min;
    let sec = elapsedTime % 60;
    let secDisplay = sec < 10 ? "0" + sec : sec;
    return `${minDisplay}:${secDisplay}`;
  }

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key == "Enter" && !isRunning) {
        setIsRunning(true);
        startTimer();
      } else if (flippedContent.length === 2 && event.key == "Enter") {
        const [first, second] = flippedContent;
        if (first === second) {
          setScore((prev) => prev + 1);
          setSymbolsToLeaveOut((prev) => [...prev, first]);
        }
        setFlippedCards([]);
        setFlippedContent([]);
      }
    };
    window.addEventListener("keydown", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleEnterPress);
    };
  });

  return (
    <div className="app-container">
      <Toaster />

      {isRunning && (
        <>
          <h2 className="text-2xl">Score: {score}</h2>
          <h2 className="text-2xl">{formatTime()}</h2>
        </>
      )}

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
        isRunning={isRunning}
        flippedCards={flippedCards}
        setFlippedCards={setFlippedCards}
        setFlippedContent={setFlippedContent}
        symbolsToLeaveOut={symbolsToLeaveOut}
      />

      {!isRunning && (
        <div className="mb-2">
          <span className="text-xl">Press Enter to start game...</span> <br />
        </div>
      )}

      {flippedContent.length === 2 && (
        <div className="mb-2">
          <span className="text-xl">Press Enter to continue...</span> <br />
        </div>
      )}

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
    </div>
  );
};

export default MainGame;
