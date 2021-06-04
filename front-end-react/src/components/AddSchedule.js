import React from "react";
import { connect } from "react-redux";
import { changeSchedule } from "../redux/actions";
import { Select, MenuItem, Box } from "@material-ui/core";
import DaysButton from "./DaysButton";

const AddSchedule = (props) => {
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
        <MenuItem value="dates"> Specific Dates </MenuItem>
        <MenuItem value="days"> Specific Days of the Week </MenuItem>
      </Select>
      {props.schedule === "dates"
        ? console.log("dates")
        : props.schedule === "days"
        ? selectDays()
        : console.log("null")}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    schedule: state.eventDetails.eventSchedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSchedule: (event) => dispatch(changeSchedule(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSchedule);
