import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeTitle } from "../redux/actions";
import { TextField, Select, Button } from "@material-ui/core";

import AddSchedule from "./AddSchedule";
import AddTime from "./AddTime";

const AddInfo = (props) => {
  const eventInfo = {
    eventName: props.title,
    eventTime: props.endTime,
    eventUrl: "something",
    attendeeId: "4",
  };

  const createEvent = async (e) => {
    e.preventDefault();
    /*
    const response = await axios
      .post("http://localhost:3000/createevent", eventInfo)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    */
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
      <div>
        <h2 style={{ marginTop: "5vh" }}>
          <center>Timezone</center>
        </h2>
        <Select className="dropdown"></Select>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (event) => dispatch(changeTitle(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInfo);
