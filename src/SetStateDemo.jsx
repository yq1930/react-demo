import React from "react";

export default class SetStateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  changeAdd = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      // 同步 实时获取改变的值
      console.log(this.state.count);
    });
    // 异步
    // console.log(this.state.count);
  };

  //改写成同步写法
  async changeReduce() {
    await this.setStateAsync({ count: this.state.count - 1 });
    console.log(this.state.count);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    return (
      <div>
        <h3>setState同步异步问题</h3>
        <div>{this.state.count}</div>
        <button onClick={this.changeAdd}>增加+1</button>
        <button onClick={this.changeReduce.bind(this)}>减少-1</button>
      </div>
    );
  }
}
