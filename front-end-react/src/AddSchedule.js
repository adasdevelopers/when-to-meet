import React,{ useState } from "react"

const AddSchedule = () => {
  const [state, setState] = useState("");


  return(
    <div>
      <h2 style={{marginTop: 30}}><center>Schedule For</center></h2>
      <select 
      className='dropdown'
      //onClick = {messageChange()}
      onChange = {(e)=> {
        const selected = e.target.value;
        setState(selected);
      }}>
      <option value="">  </option>
      <option value="today"> Today </option>
      <option value="dates"> Specific Dates </option>
      <option value="days"> Specific Days of the Week </option>
      {/* if ({state}=="today") {
       console.log({state})
      } */}
      </select>
      {state}
    </div>
  )
}

export default AddSchedule