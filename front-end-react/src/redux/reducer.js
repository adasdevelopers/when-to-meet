import {
  CHANGE_START_TIME,
  CHANGE_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_END_TIME,
  ADD_TO_DAYS_LIST,
  REMOVE_FROM_DAYS_LIST,
} from "./types";

const INITIAL_STATE = {
  eventTitle: null,
  eventSchedule: null,
  eventStartTime: null,
  eventEndTime: null,
  eventType: null,
  daysList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        eventTitle: action.payload,
      };
    case CHANGE_SCHEDULE:
      return {
        ...state,
        eventSchedule: action.payload,
      };
    case CHANGE_START_TIME:
      return {
        ...state,
        eventStartTime: action.payload,
      };
    case CHANGE_END_TIME:
      return {
        ...state,
        eventEndTime: action.payload,
      };
    case ADD_TO_DAYS_LIST:
      return {
        ...state,
        daysList: state.daysList.concat(action.payload),
      };
    case REMOVE_FROM_DAYS_LIST:
      return {
        ...state,
        daysList: state.daysList.filter((item) => item !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
