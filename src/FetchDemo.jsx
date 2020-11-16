import React from "react";

export default class FetchDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          banners: data.banner,
        });
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
