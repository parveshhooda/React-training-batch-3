import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "monisha",
    };
    /* this.clickHandler=this.clickHandler.bind(this); */
  }
  clickHandler = () => {
    this.setState({ name: "Bindu" });
  };
  /*clickHandler(){
        this.setState(
            name:'Bindu'
        )
    } */
  render() {
    return (
      <div>
        {this.state.name}
        <br></br>
        {/*<button onClick={this.clickHandler.bind(this)}>Update</button> */}
        {/*<button onClick={()=>this.clickHandler()}>Update</button> */}
        <button onClick={this.clickHandler}>Update</button>
      </div>
    );
  }
}
export default EventBind;
