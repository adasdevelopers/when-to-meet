import React, { useState } from "react";
import { connect } from "react-redux";
import { addStartDate, changeSchedule, addNumDays, addDays } from "../redux/actions";
import { Select, MenuItem, Box } from "@material-ui/core";
import DaysButton from "./DaysButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddSchedule = (props) => {
  
  const [startDate, setStartDate]= useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const convertDate = (date) => {
    let convertedDate =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate();
    return convertedDate;
  }
  const setDate = () => {
    console.log(props.schedule);
    if (props.schedule === "today") {
      const today = new Date();
      const date = convertDate(today);
      props.addStartDate(date);
      props.addNumDays(1);
      console.log(props.numDays);
    }
  };

  const addDates = () => {
    props.addNumDays((endDate-startDate)/(1000 * 3600 * 24)+1);
    props.addStartDate(convertDate(startDate));
      return(
        <div style={{display: "flex", justifyContent: "center"}}>
          <div style={{paddingLeft: '5px'}}>
            <DatePicker value={startDate} selected={startDate} onChange={(date) => setStartDate(date)}/>
          </div>
          <DatePicker value={endDate} selected={endDate} onChange={(date) => setEndDate(date)}/>
        </div>
    )
  }

  const selectDays = () => {
    return (
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

  return (
    <div>
      <h2 style={{ marginTop: "5vh" }}>
        <center>Schedule For</center>
      </h2>
      <Select className="dropdown" onChange={props.changeSchedule}>
        <MenuItem value="today"> Today </MenuItem>
        <MenuItem value="dates"> Start Date to End Date </MenuItem>
        <MenuItem value="days"> Specific Days</MenuItem>
      </Select>
      {props.schedule === "today"
        ? setDate()
        : (props.schedule === "dates"
        ? addDates()
        : (props.schedule === "days" ? selectDays() : null))
      }
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
