import React from "react";
import "./style/block.css";

const Block = (props) => {
  const { pl, pt, pr, pb } = props;

  return (
    <div
      onClick={props.onClick}
      style={{
        borderLeft: `${pl}px`,
        borderTop: `${pt}px`,
        borderRight: `${pr}px`,
        borderBottom: `${pb}px`,
      }}
      className="block"
    >
      <h1>{props.value}</h1>
    </div>
  );
};

export default Block;
