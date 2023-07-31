import React from "react";
import "./style/block.css";

const Block = (props) => {
  return (
    <div onClick={props.onClick} className="block">
      <h2>{props.value}</h2>
    </div>
  );
};

export default Block;
