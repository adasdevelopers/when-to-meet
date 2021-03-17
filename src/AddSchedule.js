import React, {useState} from "react"
import {Select, MenuItem} from "@material-ui/core"
const AddSchedule = () => {
  const [value, setValue] = useState("");
  const handleChange = e => setValue(e.target.value)

  return(
    <div>
      <h2 style={{marginTop: 30}}><center>Schedule For</center></h2>
      <Select className="dropdown" onChange={handleChange}>
        <MenuItem value="today"> Today</MenuItem>
        <MenuItem value="days"> Specific Days of the Week</MenuItem>
        <MenuItem value="dates"> Today</MenuItem>
      </Select>
      {value}
    </div>
  )
}

export default AddSchedule