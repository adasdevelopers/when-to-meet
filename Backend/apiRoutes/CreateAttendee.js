const createAttendee = async(req, res, database, Attendee) => {
    try {
        const attendee = new Attendee({
            eventId: req.body.eventId,
            attendeeName: req.body.attendeeName,
            attendeeEmail: req.body.attendeeEmail,
            availability: req.body.availability
        }); 

        result = await database.collection("Attendee").insertOne(attendee);
        console.log((await result).insertedId);
        return res.status(201).json({message: "Attendee Created"});
    } catch (err) {
        console.log(err);
        return res.status(400).json({message: "Unable to create attendee"});
    }
}

module.exports = {
    createAttendee: createAttendee
};