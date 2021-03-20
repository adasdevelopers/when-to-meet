import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
const AddDates=()=>{
    const [value, setValue]= useState(new Date());
    /* const handler=e=>
    {
        setValue(e.target.value)
    } */
    return(
        <div className="blah">
            <h2 style={{marginTop: 30}}><center>Select specific dates</center></h2>
            <DatePicker value={value} onChange={setValue} minDate={new Date()} multiple={true}></DatePicker>
            {console.log(value)}
            
        </div>
    
    )
}

export default AddDates