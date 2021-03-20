import React, { useState } from "react"
import AddSchedule from './AddSchedule'
import AddStartTime from './AddStartTime'
import AddEndTime from './AddEndTime'
import AddDays from './AddDays'
import AddDates from './AddDates'
import {TextField} from '@material-ui/core'
import {Button} from '@material-ui/core'
import './index.css';
import Popup from "./Popup"
const AddInfo = () =>
{
  const [value, setValue] = useState("")
  //const[show, setShow] = useState(false)
  const handleChange = e =>
  {
    setValue(e.target.value)
  }
  /* const handleButton= () =>
  {
    
    alert('Event created!');
  }  */
  return(
    <form className='add-form'>
      <div className='form-control'>
      <h2 style={{marginTop: 30}}><center>Event Title</center></h2>
        <TextField id="event" label="Add an event name" variant="outlined" fullWidth onChange={handleChange} ></TextField>
        {value}
        <AddSchedule/>
        <AddDays/>
        <AddDates/>
        <AddStartTime/>
        <AddEndTime/>
    </div>
    
    </form>
  )
  
}
export default AddInfo
