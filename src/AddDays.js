import React,{ useState } from "react"
import {Multiselect} from 'multiselect-react-dropdown'

const AddDays = () => {
  const [state, setState] = useState("");

  const data = 
  [
    {Day: "Sun", id: "su"},
    {Day: "Mon", id: "mo"},
    {Day: "Tuesday", id :"tu"},
    {Day: "Wed", id : "w"},
    {Day: "Thursday", id : "th"},
    {Day: "Fri", id : "fr"},
    {Day: "Sat", id : "sa"}
  ]
  const [options] = useState(data);

  return(
    <div>
      <h2 style={{marginTop: 30}}><center>Select the days to schedule</center></h2>
      {
      <Multiselect options ={options} displayValue="Day"></Multiselect>
      /* <Select className='dropdown' multiple
      //onClick = {messageChange()}
      onChange = {(e)=> {
        const selected = e.target.value;
        setState(selected);
      }}>
      <MenuItem value="">  </MenuItem>
      <MenuItem value="Sunday"> Sunday </MenuItem>
      <MenuItem value="Monday"> Monday </MenuItem>
      <MenuItem value="Tuesday"> Tuesday </MenuItem>
      <MenuItem value="Wednesday"> Wednesday </MenuItem>
      <MenuItem value="Thursday"> Thursday </MenuItem>
      <MenuItem value="Friday"> Friday </MenuItem>
      <MenuItem value="Saturday "> Saturday </MenuItem>
      </Select> */}
      {state}
    </div>
  )
}

export default AddDays