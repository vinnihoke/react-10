// React
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Local
import BallCounter from "./components/BallCounter.jsx";
import OutsCounter from "./components/OutsCounter.jsx";
import StrikeCounter from "./components/StrikeCounter.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      outs: 0,
      strikes: 0,
      balls: 0
    };
  }

  componentDidUpdate() {
    if (this.state.outs === 3) {
      alert("Other team at bat");
      this.setState({ outs: 0 });
    }
  }

  handleStrike = () => {
    //  alert("handleStrike is Working");
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ strikes: 0 });
      this.setState({ outs: this.state.outs + 1 });
    }
  };
  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ balls: 0 });
      alert("Player takes a base");
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Testing Web Applications</h1>
        <OutsCounter state={this.state} handleOut={this.handleOut} />
        <StrikeCounter state={this.state} handleStrike={this.handleStrike} />
        <BallCounter state={this.state} handleBall={this.handleBall} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
