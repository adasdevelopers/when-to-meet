import './index.css';
import AddInfo from './AddInfo';
import Popup from './Popup';

function App() {

  return (
    <div className="container">
     <h1><center><b>
       <font size = "10"> Create An Event</font>
       </b></center></h1>
       <AddInfo/>
       <Popup/>
    </div>
    
  );
}

export default App;
