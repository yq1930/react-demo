import React from "react";

export default class KeyDemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "张三",
          age: 30,
          sex: "男",
          likeColor: ["黑色", "白色", "紫色"],
        },
        {
          name: "李四",
          age: 20,
          sex: "女",
          likeColor: ["红色", "绿色", "蓝色"],
        },
      ],
    };
  }

  addList = () => {
    this.setState({
      list: this.state.list.concat({
        name: "王五",
        age: 40,
        sex: "女",
        likeColor: ["黑色", "绿色", "紫色"],
      }),
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                {item.name}
                <ul>
                  {item.likeColor.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <button onClick={this.addList}>添加</button>
      </div>
    );
  }
}
