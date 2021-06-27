const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendeeSchema = new Schema({
    eventId: {
        type: String,
        required: true
    }, 
    attendeeName: {
        type: String,
        required: true
    }, 
    attendeeEmail: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
});

module.exports = Attendee = mongoose.model('attendee', AttendeeSchema);