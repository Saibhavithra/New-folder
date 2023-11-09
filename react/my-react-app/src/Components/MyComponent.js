
import React from 'react';
import {useState} from 'react';


const MyComponent = () => {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  const handleSalary = (e) => {
    setCount(e.target.value);
  };

  const handleExpense = (e) => {
    setCount2(e.target.value);
  };

  return (
    <div className="App">
      <h2>Function Component</h2>
      <label>Salary:</label>
      <input  onChange={handleSalary} value={count} type="number" />
      <label>Expense:</label>
      <input  onChange={handleExpense} value={count2} type="number"  />
      <h1>Balance {count-count2}</h1>
    </div>
  );
};

export default MyComponent;

