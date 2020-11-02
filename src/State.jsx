import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      flag: true,
    };
  }
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  reduce = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  changeText = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    let isShowText = this.state.flag ? "我是true" : "我是false";
    return (
      <div>
        <h3>state状态</h3>
        <div>
          <p>{this.state.count}</p>
          <p>{isShowText}</p>
          <button onClick={this.add}>增加</button>
          <button onClick={this.reduce}>减少</button>
          <button onClick={this.changeText}>改变</button>
        </div>
      </div>
    );
  }
}
