import React, { useState } from "react";

const OutsCounter = props => {
  return (
    <div id="ballCounter">
      <span>{props.state.outs}</span>
      <span> Outs</span>
    </div>
  );
};

export default OutsCounter;
