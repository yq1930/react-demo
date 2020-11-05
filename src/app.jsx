import React from "react";
// import Home from "./Home";
// import MyNav from "./MyNav";
// import State from "./State";
// import ComponentList from "./ComponentList";
// import SetStateDemo from "./SetStateDemo";
// import IfDemo from "./IfDemo";
// import KeyDemo from "./KeyDemo";
// import RefsAndDemo from "./RefsAndDemo";
// import RefsAndForm from "./RefsAndForm";
// import Parent from "./components/parent";
import PropsTypeDemo from "./PropsTypeDemo";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "文本1",
  //   };
  // }

  // changeTitle = (data) => {
  //   this.setState({ title: data });
  // };
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
        {/* <State /> */}
        {/* <ComponentList
          title={this.state.title}
          changeTitle={this.changeTitle}
        /> */}
        {/* <button onClick={this.changeTitle}>修改title</button> */}
        {/* <SetStateDemo /> */}
        {/* <IfDemo /> */}
        {/* <KeyDemo></KeyDemo> */}
        {/* <RefsAndDemo></RefsAndDemo> */}
        {/* <RefsAndForm /> */}
        {/* <Parent /> */}
        <PropsTypeDemo title="" />
      </div>
    );
  }
}
