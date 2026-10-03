import React, { useState, useEffect, useRef, use } from "react";

import { Link,useNavigate } from "react-router-dom";
import "./OTP.css"; // Reuse Profile.css for styling

function OTP() {
  const otpInputArr = 6; // Number of OTP input fields
  const [inputArr, setInputArr] = useState(new Array(otpInputArr).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("");
  const inputRef = useRef([]);
  const navigate=useNavigate()

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const val = e.target.value.trim();
    if (isNaN(val)) return;
    const newInputArr = [...inputArr];
    newInputArr[index] = val.slice(-1);
    setInputArr(newInputArr);

    val && inputRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if(generatedOtp===inputArr.join("")){
        alert("OTP Matched Successfully!");
        navigate("/");

    }else{
        alert("OTP did not match or Expired. Please try again.");
    }
  }

  const handleGenerateOtp = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOTP);
    console.log("OTP", newOTP);
  };
  return (
    <div>
      <h1>OTP Page</h1>
      <p>Generate OTP and enter same OTP in the input fields and submit.</p>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <div className="otp-container">
        <div className="enter-otp">
          <h3>Enter OTP</h3>
          {inputArr.map((input, index) => (
            <input
              type="text"
              key={index}
              value={input}
              className="otp-input"
              ref={(e) => (inputRef.current[index] = e)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
          <div>
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="generate-otp">
          <h3 style={{margin:"0px"}}>Generate OTP</h3>
          <h3 style={{marginTop:"20px"}}>Your OTP is: {generatedOtp}</h3>
          <button
           className="generate-button"
            onClick={() => {
              handleGenerateOtp();
            }}
          >
            Generate OTP
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default OTP;
