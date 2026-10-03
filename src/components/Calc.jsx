import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import './Calc.css'
import AmountInput from "./AmountInput";

const Calc = () => {
  const [val1, setVal1] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const [result, setResult] = React.useState(0);
  const onchangeHandler1 = (value) => {
    setVal1(value);
  };
  const onchangeHandler2 = (value) => {
    setVal2(value);
  };
  useEffect(() => {
    const num1 = parseFloat(val1.slice(1)) ||0 ;
    const num2 = parseFloat(val2.slice(1)) ||0 ;
    setResult(num1 + num2);
  }, [val1, val2]);
  return (
    <div>
      <h1>Calc Page</h1>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <AmountInput value={val1} onChange={onchangeHandler1} />
      <AmountInput value={val2} onChange={onchangeHandler2} />
      <h2>Total is:- {result}</h2>
    </div>
  );
};
export default Calc;
