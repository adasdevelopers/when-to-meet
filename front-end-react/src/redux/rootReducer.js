import { combineReducers } from "redux";
 
import reducer from './reducer';

const rootReducer = combineReducers({
    eventDetails: reducer,
});

export default rootReducer;