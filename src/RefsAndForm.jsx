import React from "react";

export default class RefsAndForm extends React.Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.password = React.createRef();
  }

  changeBtn = () => {
    console.log(this.userName.current.value);
    console.log(this.password.current.value);
  };

  render() {
    return (
      <div>
        <h3>refs and Form</h3>
        <div>
          <input type="text" ref={this.userName} />
          <input type="text" ref={this.password} />
          <button onClick={this.changeBtn}>提交</button>
        </div>
      </div>
    );
  }
}
