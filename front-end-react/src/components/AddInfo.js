import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeTitle } from "../redux/actions";
import { TextField, Select, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import AddSchedule from "./AddSchedule";
import AddTime from "./AddTime";

const AddInfo = (props) => {
  const history = useHistory();

  const eventInfo = {
    eventName: props.title,
    eventStartTime: props.startTime,
    eventEndTime: props.endTime,
    startDate: props.startDate,
    numOfDays: props.numDays,
  };

  const createEvent = async (e) => {
    e.preventDefault();

    const response = await axios
      .post("http://localhost:3000/createevent", eventInfo)
      .then((res) => {
        history.push("/addavailability/" + res.data.createdObjectId);
      });

    console.log(eventInfo);
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <h2 style={{ marginTop: "5vh" }}>
          <center>Event Title</center>
        </h2>
        <TextField
          id="event"
          label="Add an event title"
          variant="outlined"
          fullWidth
          onChange={props.changeTitle}
        />
        <AddSchedule />
        <AddTime />
      </div>
      <Button
        variant="contained"
        color="primary"
        className="btn"
        onClick={createEvent}
        buttonStyle={{ borderRadius: 25 }}
        style={{ marginTop: "5vh", borderRadius: 25 }}
      >
        <center>Create Event </center>
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.eventDetails.eventTitle,
    startTime: state.eventDetails.eventStartTime,
    endTime: state.eventDetails.eventEndTime,
    startDate: state.eventDetails.eventStartDate,
    numDays: state.eventDetails.numOfDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (event) => dispatch(changeTitle(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInfo);
