// import React from "react";
// import Content from  "./Content";
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count:1
//     }
//     this.setNewNumber = this.setNewNumber.bind(this)
//   };

//   setNewNumber(){
//     this.setState({count: this.state.count +1})
//   }

//   render(){
//     return(
//       <div>
//         <button onClick={this.setNewNumber}>INCRIMENT</button>
//         <Content myNumber ={this.state.count}></Content>
//       </div>

//     );
//   }

// }

// export default App;

import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";

class Chats extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.chatList.map((chat, i) => {
          if (i === 6) {
            // Simulate an error
            throw new Error("I crashed!");
          }

          return (
            <li key={i} className="chat-bubble">
              {chat}
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

class App extends Component {
  chatThreadRef = React.createRef();

  state = {
    points: 3,
    chatList: ["Hey", "Parvesh ", "Hi"],
  };

  _handleAddChat = () => {
    this.setState((prevState) => ({
      chatList: [...prevState.chatList, "Hello!!!"],
    }));
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current;
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current;

      console.log({
        snapshot,
        scrollTop: chatThreadRef.scrollTop,
        scrollHeight: chatThreadRef.scrollHeight,
      });

      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;

      console.log({
        snapshot,
        scrollTop: chatThreadRef.scrollTop,
        scrollHeight: chatThreadRef.scrollHeight,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>You've scored {this.state.points} points.</p>
        </header>
        <section className="App-chat">
          <p className="chat-header">
            Football Chat{" "}
            <button className="chat-btn" onClick={this._handleAddChat}>
              Add Chat
            </button>
          </p>
          <ul className="chat-thread" ref={this.chatThreadRef}>
            <Chats chatList={this.state.chatList} />
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
