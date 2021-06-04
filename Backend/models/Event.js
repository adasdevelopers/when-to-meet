const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    }, 
    eventTime: {
        type: String,
        required: true
    }, 
    attendeeId: {
        type: String,
        required: true
    },
    eventUrl: {
        type: String,
        required: true
    }
});

module.exports = Event = mongoose.model('event', EventSchema);