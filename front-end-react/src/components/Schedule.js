import React, { useState, useEffect } from "react";
import ScheduleSelector from "react-schedule-selector";
import { TextField, Button } from "@material-ui/core";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { addEmail, addName, addAvailability } from "../redux/actions";
import axios from "axios";

const Schedule = (props) => {
  const [schedule, setSchedule] = useState([]);
  let { event } = useParams();
  const [eventInfo, setEventInfo] = useState(null);

  const eventDetail = {
    eventUrl: event,
  };

  useEffect(async () => {
    await axios
      .post("http://localhost:3000/getevent", eventDetail)
      .then((res) => {
        console.log(res.data);
        setEventInfo(res.data);
      });
  }, []);

  const buttonClick = () => {
    console.log(schedule, props.availability, props.username, props.useremail);
    console.log(event);
  };

  const handleChange = (newSchedule) => {
    setSchedule(newSchedule);
    props.addAvailability(newSchedule);
  };

  return (
    <div>
      <h1
        style={{
          "padding-left": "7vw",
          "padding-top": "6vh",
          "padding-right": "7vw",
        }}
      >
        Add Availability for Team Meeting
      </h1>
      <div style={{ display: "flex", "padding-top": "5vh", width: "100%" }}>
        <div
          style={{
            "padding-right": "7vw",
            "padding-left": "7vw",
            width: "40%",
          }}
        >
          <h2> Add your contact info </h2>
          <p style={{ "padding-top": "2vh", "padding-bottom": "1vh" }}>Name</p>
          <TextField
            id="Name"
            label="Enter your name"
            onChange={props.addName}
            variant="outlined"
            fullWidth
          />
          <p style={{ "padding-top": "2vh", "padding-bottom": "1vh" }}>Email</p>
          <TextField
            id="Email"
            label="Enter your Email"
            onChange={props.addEmail}
            variant="outlined"
            fullWidth
          />
        </div>
        <div style={{ width: "60%", "padding-right": "4vw" }}>
          <div
            style={{
              display: "flex",
              "justify-content": "center",
              "padding-bottom": "2vw",
            }}
          >
            <h2> Select the times you are available </h2>
          </div>
          {eventInfo ? (
            <ScheduleSelector
              selection={schedule}
              timeFormat="h:mma"
              hourlyChunks={2}
              onChange={handleChange}
              minTime={parseInt(eventInfo.eventStartTime)}
              maxTime={parseInt(eventInfo.eventEndTime)}
              startDate={
                eventInfo.eventStartDate
                  ? eventInfo.eventStartDate
                  : "2021-06-12"
              }
              numDays={
                parseInt(eventInfo.numOfDays)
                  ? parseInt(eventInfo.numOfDays)
                  : 7
              }
            />
          ) : null}
          <div
            style={{
              display: "flex",
              "justify-content": "flex-end",
              "padding-right": "1vw",
            }}
          >
            <div style={{ "padding-left": "1vw", "padding-right": "1vw" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                buttonStyle={{ borderRadius: 5 }}
                onClick={buttonClick}
                style={{ marginTop: "5vh", borderRadius: 5 }}
              >
                <center>Save Availability </center>
              </Button>
            </div>
            <div style={{ "padding-left": "1vw", "padding-right": "1vw" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={buttonClick}
                buttonStyle={{ borderRadius: 5 }}
                style={{ marginTop: "5vh", borderRadius: 5 }}
              >
                <center> Cancel </center>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.eventDetails.userName,
    useremail: state.eventDetails.userEmail,
    availability: state.eventDetails.userAvailability,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (event) => dispatch(addName(event.target.value)),
    addEmail: (event) => dispatch(addEmail(event.target.value)),
    addAvailability: (event) => dispatch(addAvailability(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
