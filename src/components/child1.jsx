import React from "react";

export default class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 1,
    };
  }

  componentDidMount() {
    this.setState({ money: this.state.money });
  }

  handleChange = (e) => {
    this.setState({ money: e.target.value });
  };

  render() {
    return (
      <div>
        <p>{this.props.money}</p>
        <input
          type="text"
          value={this.state.money}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
