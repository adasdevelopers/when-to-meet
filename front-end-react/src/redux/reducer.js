import { CHANGE_START_TIME, CHANGE_SCHEDULE, CHANGE_TITLE, CHANGE_END_TIME } from './types';

const INITIAL_STATE = {
    eventTitle: null,
    eventSchedule: null,
    eventStartTime: null,
    eventEndTime: null
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TITLE: 
            return {
                ...state, 
                eventTitle: action.payload
            }
        case CHANGE_SCHEDULE:
            return {
                ...state, 
                eventSchedule: action.payload
            }
        case CHANGE_START_TIME:
            return {
                ...state,
                eventStartTime: action.payload
            }
        case CHANGE_END_TIME:
            return {
                ...state,
                eventEndTime: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;