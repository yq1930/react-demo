import React from "react";

export default class RefsAndDemo extends React.Component {
  constructor(props) {
    super(props);
    this.divDemo = React.createRef();
  }

  componentDidMount() {
    console.log(this.divDemo.current);
    this.divDemo.current.style.color = "red";
  }
  render() {
    return (
      <div>
        <h3>refs and DOM</h3>
        <div ref={this.divDemo}>你好，世界!</div>
      </div>
    );
  }
}
