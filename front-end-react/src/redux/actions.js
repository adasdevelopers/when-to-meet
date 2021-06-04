import {
  CHANGE_START_TIME,
  CHANGE_SCHEDULE,
  CHANGE_TITLE,
  CHANGE_END_TIME,
  CHANGE_EVENT_TYPE,
  ADD_TO_DAYS_LIST,
  REMOVE_FROM_DAYS_LIST,
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
