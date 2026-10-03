import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NestedDisplay from './NestedDisplay';
import {nestedData} from '../mockData.js/mockData.js'

function Display() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState(nestedData)
  const [checked,setChecked]=useState({})

  const handleChange=(isChecked,node)=>{
    setChecked(prev=>{
      const newState={...prev,[node.id]:isChecked}
      const updateChild=(node)=>{
        node.children?.forEach((child)=>{
          newState[child.id]=isChecked
          child.children && updateChild(child)
        } )
      }
      updateChild(node)
      return newState
    })
  }
 
  return (
    <div>
      <h1>Nested Checkbox</h1>
      <Link to="/"><button className="home-button">Home</button></Link>
   <NestedDisplay data={data} checked={checked} setChecked={setChecked}/>
    </div>
  )
}
export default Display
