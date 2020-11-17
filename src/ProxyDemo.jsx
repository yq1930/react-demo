import React from "react";
// import qs from "qs";

export default class ProxyDemo extends React.Component {
  // http://tingapi.ting.baidu.com/v1/restserver/ting
  // http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0

  // https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
  componentDidMount() {
    // fetch(
    //   "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0"
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // fetch("/api/list")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }

  render() {
    return <div>hello</div>;
  }
}
