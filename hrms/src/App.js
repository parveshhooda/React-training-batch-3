import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "./Services";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <>
      <h1> APP ENTRY PAGE </h1>
      <Router>
        <div>
          <Link to="/app" exact activeStyle={{ color: "yellow" }}>
            APP Entry PAGE{" "}
          </Link>
          <br></br>
          <Link to="/Home" exact activeStyle={{ color: "yellow" }}>
            Home{" "}
          </Link>
          <br></br>
          <Link to="/Services" exact activeStyle={{ color: "yellow" }}>
            Services
          </Link>
          <br></br>
          <Link to="/Contact" exact activeStyle={{ color: "yellow" }}>
            ContactUS
          </Link>
          <br></br>

          <Switch>
            <Route exact path="/app" component={App} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Services" component={Services} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
