import { useState } from "react";
import Menu from "./components/Menu";
import MainGame from "./components/MainGame";

function App() {
  // const [difficulty, setDifficulty] = useState("");

  return (
    <div className="text-white flex flex-col items-center justify-center text-center font-bold">
      <h1 className="text-4xl">Memory Game</h1>
      {/* {difficulty == "" && <Menu setDifficulty={setDifficulty} />} */}
      {/* {difficulty != "" && <MainGame difficulty={difficulty} />} */}
      <MainGame />
    </div>
  );
}

export default App;
