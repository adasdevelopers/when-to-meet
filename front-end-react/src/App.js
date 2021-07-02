import "./index.css";
import Schedule from "./components/Schedule";
import AddInfo from "./components/AddInfo";
import DisplayAvailability from "./components/DisplayAvailability";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Info } from "@material-ui/icons";

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
      
    </div>
  );
}

export default App;
