import React, { useState } from "react"
import AddSchedule from './AddSchedule'
import AddStartTime from './AddStartTime'
import AddEndTime from './AddEndTime'
import AddDays from './AddDays'
import AddDates from './AddDates'
import {TextField} from '@material-ui/core'
import {Button} from '@material-ui/core'
import './index.css';
const AddInfo = () =>
{
  const [value, setValue] = useState("")
  const handleChange = e =>
  {
    setValue(e.target.value)
  }
  const handleButton= () =>
  {
    alert('Event created!');
  }
  return (
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
      <Button 
      onClick={handleButton}
      className='btn' 
      variant="contained"
      style ={{
        fontSize : 20,
        fontFamily: "inherit",
        color:'white'
      }}fullWidth
      color="primary">
        Create Event
      </Button>
    </form>
  )
}
export default AddInfo
