import React, { useState } from "react";

const OutsCounter = props => {
  return (
    <div id="ballCounter">
      <span>{props.state.outs}</span>
      <button onClick={() => props.handleOut()}>Add Out</button>
    </div>
  );
};

export default OutsCounter;
