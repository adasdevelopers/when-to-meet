import {
  CHANGE_START_TIME,
  CHANGE_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_END_TIME,
  ADD_TO_DAYS_LIST,
  REMOVE_FROM_DAYS_LIST,
  ADD_USER_EMAIL,
  ADD_USER_NAME,
  ADD_USER_AVAILABILITY,
  ADD_EVENT_START_DATE,
  ADD_NUM_OF_DAYS,
} from "./types";

const INITIAL_STATE = {
  eventTitle: null,
  eventSchedule: null,
  eventStartTime: null,
  eventEndTime: null,
  eventType: null,
  daysList: [],
  userName: null,
  userEmail: null,
  userAvailability: [],
  eventStartDate: null,
  numOfDays: null,
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
    case ADD_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case ADD_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case ADD_USER_AVAILABILITY:
      return {
        ...state,
        userAvailability: action.payload,
      };
    case ADD_EVENT_START_DATE:
      return {
        ...state,
        eventStartDate: action.payload,
      };
    case ADD_NUM_OF_DAYS:
      return {
        ...state,
        numOfDays: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
