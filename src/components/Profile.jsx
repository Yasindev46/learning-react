import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import {nestedData} from "../mockData.js/mockData.js"

function Profile() {
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>Nested Page</h1>
      <Link to="/"><button className="home-button">Home</button></Link>
      {nestedData.map((item)=>{
        return(
          <div style={{marginLeft:"20px", position:"absolute", left:"20px"}}>
            <input type="checkbox" id={item.id} />
            <span>{item.name}</span>
            {item.children && item.children.map((child)=>{
              return(
                <div style={{marginLeft:"20px"}}>
                  <input type="checkbox" id={child.id} />
                  <span>{child.name}</span>
                </div>
              )
            })}
          </div>
        )

      })}
    </div>
  )
}

export default Profile