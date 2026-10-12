import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"; // Reuse Profile.css for styling

function Autosave() {
  const [inputValue, setInputValue] = React.useState("");
  const [oddEvenValue, setOddEvenValue] = React.useState("");
  const [oddEven, setOddEven] = React.useState("");
  const [paraValue,setParaValue]= React.useState("");
  const [error,setError]= React.useState("");
  useEffect(() => {
    const savedValue = localStorage.getItem("autosaveInput");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    localStorage.setItem("autosaveInput", value);
    setInputValue(value);
  };
  const handleClear = () => {
    localStorage.removeItem("autosaveInput");
    setInputValue("");
  };
const handleFindOddEven = () => {
    const num = parseInt(oddEvenValue);
    console.log("===>num",num);
    if(num%2===0 && !isNaN(num)){
        setOddEven("Even");
    }else if(num%2!==0 && !isNaN(num)){
        setOddEven("Odd");
    }else if(isNaN(num)){
        setError("Invalid number");
    }
  };

  const handleCapitalize = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.split('.').map(sentence => {
      const trimmed = sentence.trim();
      if (trimmed.length > 0) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }
      return '';
    }).join('. ');
    setParaValue(capitalizedValue);
  }

  return (
    <div>
      <h1>Autosave Page</h1>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <span>Autosave input values on local storage. </span> <br/>

      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClear}>Clear</button>
      <br /> <hr />
      <h3>Find Odd or Even number</h3>
      <input type="text" value={oddEvenValue} onChange={(e)=>{setOddEvenValue(e.target.value);setError("")}}/> 
      <button onClick={handleFindOddEven}>Find</button>
      {oddEven && <h3>The given number is {oddEven} value</h3>}
      {error && <h3>{error}</h3>}
      <br /><hr />
      <h3>Auto capital</h3>
      <input type="text" value={paraValue} onChange={handleCapitalize}/>
      <button onClick={() => setParaValue("")}>Clear</button>
        <p>{paraValue}</p>
    </div>
  );
}

export default Autosave;
