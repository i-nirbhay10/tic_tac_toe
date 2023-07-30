import React from "react";
import Block from "./Block";
import "./style/board.css";

const Board = () => {
  return (
    <>
      <div className="board_container">
        <h3> Welcome to tic-tac-toe game</h3>
        <div className="board_row">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="board_row">
          <Block />
          <Block />
          <Block />
        </div>
        <div className="board_row">
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </>
  );
};

export default Board;
