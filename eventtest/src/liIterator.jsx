import react from "react";
const fruits = ["apple", "banana", "pineapple", "mango"];

const liIterator = () => (
  <ul>
    {fruits.map(function (item) {
      return
      <li key={item}>{item}</li>
    })}
    {/* fruits.map((item => <li key={item}>{item}</li>)) */}
  </ul>
);

export default liIterator;
