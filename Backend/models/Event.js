const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventStartTime: {
    type: String,
    required: true,
  },
  eventEndTime: {
    type: String,
    required: true,
  },
  attendeeId: {
    type: String,
    required: false,
  },
  eventStartDate: {
    type: String,
    required: false,
  },
  numOfDays: {
    type: String,
    required: false,
  },
  differentDays: {
    type: Array,
    required: false,
  },
});

module.exports = Event = mongoose.model("event", EventSchema);
