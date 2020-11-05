import React from "react";
import PropTypes from "prop-types";

export default class PropsTypeDemo extends React.Component {
  render() {
    return (
      <div>
        <div>你好：{this.props.title}</div>
      </div>
    );
  }
}

PropsTypeDemo.propTypes = {
  title: PropTypes.string.isRequired,
};

PropsTypeDemo.defaultProps = {
  title: "默认值",
};
