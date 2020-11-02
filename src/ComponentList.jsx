import React from "react";

export default class ComponentLife extends React.Component {
  // 组件渲染前
  componentWillMount() {
    console.log("componentWillMount");
  }

  // 组件渲染后
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 是否允许修改
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  // 数据修改前
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // 数据修改后
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // props发生改变
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  // 组件卸载前
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  changeFather = () => {
    this.props.changeTitle("我是子组件传过来的值");
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h3>生命周期函数</h3>
        <p>{count}</p>
        <p>{this.props.title}</p>
        <button onClick={this.changeCount}>增加+1</button>
        <button onClick={this.changeFather}>修改父组件值</button>
      </div>
    );
  }
}
