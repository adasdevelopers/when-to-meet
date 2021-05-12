import React, {useState} from "react";
import { connect } from 'react-redux';
import {changeStartTime} from './redux/actions';

const AppStartTime = (props) => {
  const [timeSlots, selectTimeSlot] = useState(
    [
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
  )

    return (
      <form>
        <h2 style={{marginTop: 50}}><center>Start Time</center></h2>
        <label>
          <select className='dropdown' onChange={props.changeStartTime}>
            {timeSlots.map(item => (
              <option key={item.id} value={item.time}>
                {item.time}
              </option>
            ))}
          </select>
        </label>
      </form>
    );

}

const mapStateToProps = state => {
  return {
    startTime: state.eventDetails.eventStartTime,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStartTime: (event) => dispatch(changeStartTime(event.target.value)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppStartTime);