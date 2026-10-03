import React from 'react';

function NestedDisplay({data,checked,setChecked}) {

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
    {data.map((item)=>{
      return(
        <div style={{marginLeft:"40px"}}>
        <input type="checkbox" checked={checked[item.id]|| false} onChange={(e)=>handleChange(e.target.checked,item)}/>
        <span>{item.name}</span>
        {item.children && <NestedDisplay data={item.children} checked={checked} setChecked={setChecked}/>}
        </div>
      )
    })}
    </div>
  )
}
export default NestedDisplay
