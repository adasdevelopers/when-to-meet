import "./index.css";
import Schedule from "./components/Schedule";
import AddInfo from "./components/AddInfo";

function App() {
  return (
    <div className="container">
      <h1>
        <center>
          <b>
            <font size="10"> Create An Event</font>
          </b>
        </center>
      </h1>
      <AddInfo />
      <Schedule />
    </div>
  );
}

export default App;
