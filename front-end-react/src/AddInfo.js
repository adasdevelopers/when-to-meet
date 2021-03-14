import AddSchedule from './AddSchedule'
import AddStartTime from './AddStartTime'
import AddEndTime from './AddEndTime'
const AddInfo = () => {
  function handler()
  {
    console.log('hello')
  }
  return (
       <form className='add-form'>
         <div className='form-control'>
           <h2 style={{marginTop: 30}}><center>Event Title</center></h2>
           <input
             type='text'
             placeholder='Add an event title'
           />
           <AddSchedule/>
           <AddStartTime/>
           <AddEndTime/>
         </div>
         
         <button className='btn' onClick={handler} style={{marginTop: 30}} ><center>Create Event </center></button> 
         
       </form>
  )
}
export default AddInfo
