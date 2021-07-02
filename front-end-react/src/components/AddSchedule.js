import React, { useState } from "react";
import { connect } from "react-redux";
import { addStartDate, changeSchedule, addNumDays } from "../redux/actions";
import { Select, MenuItem, Box } from "@material-ui/core";
import DaysButton from "./DaysButton";
import DatePicker from "react-multi-date-picker"



const AddSchedule = (props) => {
  
  
  const [value, setValue] = useState(new Date());

  const selectDates = () =>
  {
  return(
   <div style={{justifyContent: "center" }}> 
    <DatePicker value={value} onChange={setValue} minDate={new Date()} multiple={true}></DatePicker>
    
    </div>
  );

  }
  const selectDays = () => {
    
    return(  
      <div>
         
        <center>
          <h3 style={{ paddingTop: "3vh" }}>Select the days to schedule</h3>
        </center>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <center>
            <div style={{ display: "flex" }}>
              <DaysButton name="Monday" />
              <DaysButton name="Tuesday" />
              <DaysButton name="Wednesday" />
            </div>
            <div style={{ display: "flex" }}>
              <DaysButton name="Thursday" />
              <DaysButton name="Friday" />
              <DaysButton name="Saturday" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DaysButton name="Sunday" />
            </div>
          </center>
        </div>
      </div>
    );
  };

  const setDate = () => {
    
    console.log(props.schedule);
    if (props.schedule === "today") {
      const today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      props.addStartDate(date);
      props.addNumDays(1);
      console.log(props.numDays);
    }
  };

  

  return (
    <div>
      <h2 style={{ marginTop: "5vh" }}>
        <center>Schedule For</center>
      </h2>
      <Select className="dropdown" onChange={props.changeSchedule}>
        <MenuItem value="today"> Today </MenuItem>
        <MenuItem value="dates"> Specific Dates </MenuItem>
        <MenuItem value="days"> Specific Days of the Week </MenuItem>
      </Select>
      {props.schedule === "today"
        ? setDate()
        : props.schedule === "days"
        ? selectDays()
        : props.schedule === "dates"
        ? selectDates()
        :null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    schedule: state.eventDetails.eventSchedule,
    startDate: state.eventDetails.eventStartDate,
    numDays: state.eventDetails.numOfDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSchedule: (event) => dispatch(changeSchedule(event.target.value)),
    addStartDate: (date) => dispatch(addStartDate(date)),
    addNumDays: (num) => dispatch(addNumDays(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedule);
