import React from "react";
class CounterButton extends React.Component {
    constructor() {
      super();
      this.state = {count: 1};
    }
  
    shouldComponentUpdate(nextState) {
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
  
    render() {
      return (
        <button
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      );
    }
  }
  export default CounterButton;