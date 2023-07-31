import React, { useState } from "react";
import Block from "./Block";
import "./style/board.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [initial, Setinitial] = useState(true);

  const clicked = (index) => {
    const paststate = [...state];
    paststate[index] = initial ? "x" : "o";
    setState(paststate);
    if (initial) {
      Setinitial(false);
    } else {
      Setinitial(true);
    }
  };

  return (
    <>
      <div className="board_container">
        <h3> Welcome to tic-tac-toe game</h3>
        <div className="board_row">
          <Block onClick={() => clicked(0)} value={state[0]} />
          <Block onClick={() => clicked(1)} value={state[1]} />
          <Block onClick={() => clicked(2)} value={state[2]} />
        </div>
        <div className="board_row">
          <Block onClick={() => clicked(3)} value={state[3]} />
          <Block onClick={() => clicked(4)} value={state[4]} />
          <Block onClick={() => clicked(5)} value={state[5]} />
        </div>
        <div className="board_row">
          <Block onClick={() => clicked(6)} value={state[6]} />
          <Block onClick={() => clicked(7)} value={state[7]} />
          <Block onClick={() => clicked(8)} value={state[8]} />
        </div>
      </div>
    </>
  );
};

export default Board;
