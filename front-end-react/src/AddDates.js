import { TextField } from "@material-ui/core";
import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
import format from "date-fns/format"; 
const AddDates=()=>{
    const [value, setValue]= useState(new Date());
    /* const handler=e=>
    {
        setValue(e.target.value)
    } */
    return(
        <div className="blah">
            <h2 style={{marginTop: 30}}><center>Select specific dates</center></h2>
            <DatePicker value={value} onChange={setValue} minDate={new Date()}></DatePicker>
            {console.log(value)}
        </div>
    
    )
}

export default AddDates
/* const AddDates=()=> {
    // range demo
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
   
    function handleDateChange(date) {
       // initial change: start by setting the startDate
       if (!startDate && !endDate) {
         setStartDate(date);
        // startDate has been set, set the end date
       } 
   
       // user is choosing another range => set the start date
       // and set the endDate back to null

    }
   
     return (
       <div>
        <h2 style={{marginTop: 30}}><center>Select specific dates</center></h2>
         <DatePicker
           controls={['calendar']}
           onChange={(date) => handleDateChange(date)}
           selectsStart={true}
           selected={startDate}
           startDate={startDate}
           endDate={endDate}
           inline={true}
           center
         />
       </div>
     );
   }
export default AddDates */
/* const AddStartTime=()=>
{
  const [value, setValue] = useState("")
  const handleChange = e =>
  {
    setValue(e.target.value)
  }
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} selectMultiple={false} />
  );
  /* return(
    <div>
      <h2 style={{marginTop: 50}}><center>Select Dates:</center></h2>3
      <label>
          <DatePicker ></DatePicker> */
     //   {/* <TextField onChange={handleChange} className="dropdown" type="date">
          
      /*   </TextField> *///}
      //</label> 
     /*  {value}
    </div>
  ) */
//}
//export default AddStartTime */