import React from "react";
import api from "./api";

export default class HttpDemo extends React.Component {
  componentDidMount() {
    api
      .getChengpin()
      .then((res) => res.json())
      .then((data) => {
        console.log(1, data);
      });

    api
      .getLogin({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw",
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(2, data);
      });
  }
  render() {
    return <div>hello</div>;
  }
}
