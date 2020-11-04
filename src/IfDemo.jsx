import React from "react";

export default class IfDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["张三", "李四"],
      title: "姓名",
      isLogin: false,
    };
  }

  changeBtn = () => {
    this.setState({ isLogin: true });
  };
  render() {
    let names = this.state.list;
    let isShowName = this.state.isLogin ? <div>已登陆</div> : <div>未登陆</div>;
    return (
      <div>
        <h3>条件渲染</h3>
        <p>{isShowName}</p>
        <button onClick={this.changeBtn}>登陆</button>

        {names.length !== 0 ? (
          names.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            );
          })
        ) : (
          <div>数据请求中...</div>
        )}
      </div>
    );
  }
}
