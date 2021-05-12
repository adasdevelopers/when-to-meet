import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from './redux/actions';

import AddSchedule from './AddSchedule';
import AddStartTime from './AddStartTime';
import AddEndTime from './AddEndTime';

const AddInfo = (props) => {

  return (
       <form className='add-form'>
         <div className='form-control'>
           <h2 style={{marginTop: 30}}><center>Event Title</center></h2>
           <input
             type='text'
             placeholder='Add an event title'
             onChange={props.changeTitle}
           />
           <AddSchedule/>
           <AddStartTime/>
           <AddEndTime/>
         </div>
         <button className='btn' style={{marginTop: 30}} ><center>Create Event </center></button> 
       </form>
  )

}

const mapStateToProps = state => {
  return {
    title: state.eventDetails.eventTitle,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: (event) => dispatch(changeTitle(event.target.value)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddInfo);
