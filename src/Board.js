import { useState } from "react";

import Square from "./App";
import React from "react";
export default function Board() {
  const [currentUser, setCurrentUser] = useState("X");

  const changeTurn = () => {
    if (currentUser === "X") {
      setCurrentUser("O");
    } else {
      setCurrentUser("X");
    }
  };

  return (
    <>
      <div className="board-row" onClick={changeTurn}>
        <Square value={currentUser} />
        <Square value={currentUser} />
        <Square value={currentUser} />
      </div>
      <div className="board-row" onClick={changeTurn}>
        <Square value={currentUser} />
        <Square value={currentUser} />
        <Square value={currentUser} />
      </div>
      <div className="board-row" onClick={changeTurn}>
        <Square value={currentUser} />
        <Square value={currentUser} />
        <Square value={currentUser} />
      </div>
    </>
  );
}
