import React,{useState} from "react";
import { Link } from "react-router-dom";

const Timer=()=>{
    const [time,setTime]=useState('');

    const myTimer=setInterval(()=>{
        const date=new Date()
        setTime(date.toLocaleTimeString())
    },1000)


    return(
        <div>
            <Link to="/">
        <button className="home-button">Home</button>
      </Link>
            <h1>Timer</h1>
            <p>{time}</p>
            <button onClick={()=>clearInterval(myTimer)}>Stop Timer</button>
        </div>

    )
}

export default Timer