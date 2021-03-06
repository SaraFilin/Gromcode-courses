import React from "react";
import Clock from "./Clock";

class App extends React.Component {
  state = {
    visible: true,
  };
  toggle = () => {
    this.setState({
        visible: !this.state.visible,
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Click and hide time</button>
        <div>
          {this.state.visible && (
            <>
              <Clock location="London" offset={0} />
              <Clock location="Kyiv" offset={2} />
              <Clock location="New York" offset={-5} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
