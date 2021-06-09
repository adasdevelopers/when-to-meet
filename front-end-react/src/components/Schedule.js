import React, { useState } from "react";
import ScheduleSelector from "react-schedule-selector";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  const handleChange = (newSchedule) => {
    setSchedule(newSchedule);
    console.log(schedule);
  };

  return <ScheduleSelector timeFormat="h:mma" hourlyChunks={4} />;
};

export default Schedule;
