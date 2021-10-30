import React from "react";

class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL Mount!");
  }

  componentDidMount() {
    console.log("Component Did mount!");
  }

  componentWillReceiveProps(newProps) {
    console.log("Component will recieve props");
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default Content;
