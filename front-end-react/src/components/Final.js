import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ScheduleSelector from "react-schedule-selector";
import axios from 'axios';

const Final = (props) => {
    const [schedule, setSchedule] = useState([]);
    let { event } = useParams();
    const [eventInfo, setEventInfo] = useState(null);
    const [attendeeInfo, setAttendeeInfo] = useState([]);    
    let availabilies = new Set();

    const handleChange = (newSchedule) => {
        setSchedule(newSchedule);
    };

    
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

    useEffect(async() => {
        await axios
          .post("http://localhost:3000/getavailabilities", eventDetail)
          .then((res) => {
              console.log(res.data);
              setAttendeeInfo(res.data);
              for (let i=0; i<attendeeInfo.length; i++) {
                  console.log(attendeeInfo[i].availability);
              }
          })
    }, []);

    return (
        <div style={{ width: "60%"}}>
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
        </div>
    );
};

export default Final;
