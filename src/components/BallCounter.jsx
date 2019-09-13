import React, { useState } from "react";

const BallCounter = props => {
  return (
    <div id="ballCounter">
      <span>{props.state.balls}</span>
      <button onClick={() => props.handleBall()}>Add Ball</button>
    </div>
  );
};

export default BallCounter;
