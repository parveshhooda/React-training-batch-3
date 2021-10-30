import { users } from "./users.json";

const fruits = ["apple", "banana", "pineapple", "mango"];

const App = () => (
  <ul>
    {/* // fruits.map(function(item){ */}

    {/* //   return
      //   <li key={item}>{item}</li>
      // }) */}

    {/* // fruits.map((item => <li key={item}>{item}</li>)) */}

    {users.map((item) => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.sal}</div>
      </li>
    ))}
  </ul>
);

export default App;
