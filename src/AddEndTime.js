import { MenuItem, Select } from "@material-ui/core"
import {useState} from "react"

const AddStartTime=()=>
{
  const [value, setValue] = useState("")
  const handleChange = e =>
  {
    setValue(e.target.value)
  }
  return(
    <div>
      <h2 style={{marginTop: 50}}><center>End Time</center></h2>
      <label>
        <Select onChange={handleChange} className="dropdown">
          <MenuItem value=""></MenuItem>
          <MenuItem value="0">Midnight</MenuItem>
          <MenuItem value="1"> 1 A.M</MenuItem>
          <MenuItem value="2"> 2 A.M</MenuItem>
          <MenuItem value="3"> 3 A.M</MenuItem>
          <MenuItem value="4"> 4 A.M</MenuItem>
          <MenuItem value="5"> 5 A.M</MenuItem>
          <MenuItem value="6"> 6 A.M</MenuItem>
          <MenuItem value="7"> 7 A.M</MenuItem>
          <MenuItem value="8"> 8 A.M</MenuItem>
          <MenuItem value="9"> 9 A.M</MenuItem>
          <MenuItem value="10">10 A.M</MenuItem>
          <MenuItem value="11">11 A.M</MenuItem>
          <MenuItem value="12">Noon</MenuItem>
          <MenuItem value="13">1 P.M</MenuItem>
          <MenuItem value="14">2 P.M</MenuItem>
          <MenuItem value="15">3 P.M</MenuItem>
          <MenuItem value="16">4 P.M</MenuItem>
          <MenuItem value="17">5 P.M</MenuItem>
          <MenuItem value="18">6 P.M</MenuItem>
          <MenuItem value="19">7 P.M</MenuItem>
          <MenuItem value="20">8 P.M</MenuItem>
          <MenuItem value="21">9 P.M</MenuItem>
          <MenuItem value="22">10 P.M</MenuItem>
          <MenuItem value="23">11 P.M</MenuItem>
        </Select>
      </label>
      {value}
    </div>
  )
}
export default AddStartTime

/* import React from "react";

class AddEndTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timings: [
        { id: "0", time: "" },
        { id: "1", time: "Midnight" },
        { id: "2", time: "1 am" },
        { id: "3", time: "2 am" },
        { id: "4", time: "3 am" },
        { id: "5", time: "4 am" },
        { id: "6", time: "5 am" },
        { id: "7", time: "6 am" },
        { id: "8", time: "7 am" },
        { id: "9", time: "8 am" },
        { id: "10", time: "9 am" },
        { id: "11", time: "10 am" },
        { id: "12", time: "11 am" },
        { id: "13", time: "Noon" },
        { id: "14", time: "1 pm" },
        { id: "15", time: "2 pm" },
        { id: "16", time: "3 pm" },
        { id: "17", time: "4 pm" },
        { id: "18", time: "5 pm" },
        { id: "19", time: "6 pm" },
        { id: "20", time: "7 pm" },
        { id: "21", time: "8 pm" },
        { id: "22", time: "9 pm" },
        { id: "23", time: "10 pm" },
        { id: "24", time: "11 pm" },
        
      ]
    };
  }

  render() {
    return (
      <form>
        <h2 style={{marginTop: 50}}><center>End Time</center></h2>
        <label>
          <select className='dropdown' onChange= {(e)=> {
        const selected = e.target.value;
        this.setState(selected);
      }}>
            {this.state.timings.map(item => (
              <option key={item.id} value={item.time}>
                {item.time}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default AddEndTime */