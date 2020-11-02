import React from "react";

export default class MyNav extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.nav.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
