import React from "react";
class Content extends React.Component {
  componentWillMount() {
    console.log("Compoment WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Compoment DID MOUNT!");
  }
  componentWillReceiveProps() {
    console.log("Compoment WILL ReceiveProps!");
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {
    console.log("Compoment WILL Update!");
  }
  componentDidUpdate() {
    console.log("Compoment did update!");
  }
 
  componentWillUnmount() {
    alert("Sixth step: Component WILL UNMOUNT");
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
