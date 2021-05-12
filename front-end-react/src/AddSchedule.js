import React from "react";
import { connect } from 'react-redux';
import { changeSchedule } from './redux/actions';

const AddSchedule = (props) => {


  return(
    <div>
      <h2 style={{marginTop: 30}}><center>Schedule For</center></h2>
      <select 
      className='dropdown'
      onChange = {props.changeSchedule}>
      <option value="">  </option>
      <option value="today"> Today </option>
      <option value="dates"> Specific Dates </option>
      <option value="days"> Specific Days of the Week </option>
      </select>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    schedule: state.eventDetails.eventSchedule,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSchedule: (event) => dispatch(changeSchedule(event.target.value)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddSchedule);