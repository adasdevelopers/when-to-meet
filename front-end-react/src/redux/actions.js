import {
  CHANGE_START_TIME,
  CHANGE_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_END_TIME,
  CHANGE_EVENT_TYPE,
  ADD_TO_DAYS_LIST,
  REMOVE_FROM_DAYS_LIST,
  ADD_USER_EMAIL,
  ADD_USER_NAME,
  ADD_USER_AVAILABILITY,
  REMOVE_USER_AVAILABILITY,
  ADD_EVENT_START_DATE,
  ADD_NUM_OF_DAYS,
} from "./types";

export const changeTitle = (text) => {
  return {
    type: CHANGE_TITLE,
    payload: text,
  };
};

export const changeSchedule = (text) => {
  return {
    type: CHANGE_SCHEDULE,
    payload: text,
  };
};

export const changeStartTime = (text) => {
  return {
    type: CHANGE_START_TIME,
    payload: text,
  };
};

export const changeEndTime = (text) => {
  return {
    type: CHANGE_END_TIME,
    payload: text,
  };
};

export const addDays = (text) => {
  return {
    type: ADD_TO_DAYS_LIST,
    payload: text,
  };
};

export const removeDays = (text) => {
  return {
    type: REMOVE_FROM_DAYS_LIST,
    payload: text,
  };
};

export const addName = (text) => {
  return {
    type: ADD_USER_NAME,
    payload: text,
  };
};

export const addEmail = (text) => {
  return {
    type: ADD_USER_EMAIL,
    payload: text,
  };
};

export const addAvailability = (arr) => {
  return {
    type: ADD_USER_AVAILABILITY,
    payload: arr,
  };
};

export const addStartDate = (text) => {
  return {
    type: ADD_EVENT_START_DATE,
    payload: text,
  };
};

export const addNumDays = (text) => {
  return {
    type: ADD_NUM_OF_DAYS,
    payload: text,
  };
};
