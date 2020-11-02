import React from "react";
// import Home from "./Home";
// import MyNav from "./MyNav";
import State from "./State";

export default class App extends React.Component {
  render() {
    // let nav1 = ["1", "2", "3"];
    // let nav2 = ["111", "222", "333"];
    // return (
    //   <div>
    //     <h2>学习react</h2>
    //     <MyNav nav={nav1} title="路径" />
    //     <MyNav nav={nav2} title="导航" />
    //   </div>
    // );
    return (
      <div>
        <State />
      </div>
    );
  }
}
