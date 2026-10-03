import React from 'react'
import './AmountInput.css'

function AmountInput({ value, onChange, placeholder = "Enter Amount", error }) {
  const onChangeHandler=(e)=>{
    let val = e.target.value;
    if (val.startsWith('$')) {
      let numPart = val.slice(1);
      if (/^\d*$/.test(numPart)) {
        onChange(val);
      }
    } else {
      if (/^\d*$/.test(val)) {
        onChange('$' + val);
      }
    }
    // if(val.slice(1).length===0){
    //   val = val.replace('$','');
    //   onChange(val);
    // }
  }
  return (
    <div className='input-container'>
      <div className='input-placeholder'>{placeholder}</div>
      <input className='input-box' type="text" value={value} onChange={onChangeHandler}/>
      {error && <div className='input-error'>Allowed only numbers</div>}
    </div>
  )
}

export default AmountInput