import React from "react";

const Menu = ({ setDifficulty }) => {
  return (
    <div className="mt-5">
      <h2>Choose a level</h2>
      <div className="flex flex-col bg-slate-900 p-2 mt-3 border-2 border-solid rounded-md">
        <button
          className="bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-800 m-2 p-2 rounded-md"
          onClick={() => setDifficulty("small")}
        >
          Small Board
        </button>
        <button
          className="bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-800 m-2 p-2 rounded-md"
          onClick={() => setDifficulty("medium")}
        >
          Medium Board
        </button>
        <button
          className="bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-800 m-2 p-2 rounded-md"
          onClick={() => setDifficulty("large")}
        >
          Large Board
        </button>
      </div>
    </div>
  );
};

export default Menu;
