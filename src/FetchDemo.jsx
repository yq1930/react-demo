import React from "react";
import qs from "qs";

export default class FetchDemo extends React.Component {
  // http://iwenwiki.com/api/
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    // get请求
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          banners: data.banner,
        });
      });

    // post请求
    fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
      // body: {
      //   user_id: "iwen@qq.com",
      //   password: "iwen123",
      //   verification_code: "crfvw",
      // },
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Accept: "application/json,text/plain,*/*",
      },

      // 第一种写法
      // body: "user_id=iwen@qq.com&password=iwen123&verification_code=crfvw",

      // 第二种写法
      body: qs.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    let { banners } = this.state;
    return (
      <div>
        <ul>
          {banners.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
