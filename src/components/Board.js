import React, { useState } from "react";
import Block from "./Block";
import "./style/board.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [initial, Setinitial] = useState(true);

  const checkwinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;

      if (state[a] === state[b] && state[a] === state[c] && state[a] !== null) {
        return state[a];
      }
    }
  };

  const win = checkwinner();

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
          <Block pl={0} pt={0} onClick={() => clicked(0)} value={state[0]} />
          <Block pt={0} onClick={() => clicked(1)} value={state[1]} />
          <Block pr={0} pt={0} onClick={() => clicked(2)} value={state[2]} />
        </div>
        <div className="board_row">
          <Block pl={0} onClick={() => clicked(3)} value={state[3]} />
          <Block onClick={() => clicked(4)} value={state[4]} />
          <Block pr={0} onClick={() => clicked(5)} value={state[5]} />
        </div>
        <div className="board_row">
          <Block pl={0} pb={0} onClick={() => clicked(6)} value={state[6]} />
          <Block pb={0} onClick={() => clicked(7)} value={state[7]} />
          <Block pr={0} pb={0} onClick={() => clicked(8)} value={state[8]} />
        </div>
        <h4>
          {win ? (
            <>
              <h4> {`woo..! ${win} is win the match`}</h4>
              <button
                onClick={() => {
                  setState([null]);
                }}
              >
                restert
              </button>
            </>
          ) : (
            ""
          )}
        </h4>
      </div>
    </>
  );
};

export default Board;
