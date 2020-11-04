import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 1,
    };
  }

  handleChange = (e) => {
    this.setState({ money: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          父组件:
          <input
            type="text"
            value={this.state.money}
            onChange={this.handleChange}
          />
        </div>
        <div>
          人民币:
          <Child1 money={this.state.money} />
        </div>
        <div>
          美元:
          <Child2 money={this.state.money} />
        </div>
      </div>
    );
  }
}
