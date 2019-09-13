import React, { useState } from "react";

const StrikeCounter = props => {
  console.log(props);
  return (
    <div id="strikeCounter">
      <span>{props.state.strikes}</span>
      <button onClick={() => props.handleStrike()}>Add Strike</button>
    </div>
  );
};

export default StrikeCounter;
