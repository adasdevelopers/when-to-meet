const createEvent = async(req, res, database, Event) => {
    try {
        const event = new Event({
            eventName: req.body.eventName,
            eventTime: req.body.eventTime,
            attendeeId: req.body.attendeeId,
            eventUrl: req.body.eventUrl
        }); 

        result = await database.collection("Event").insertOne(event);
        console.log((await result).insertedId);
        return res.status(201).json(result.data);
    } catch (err) {
        console.log(err);
        return res.status(400).json({message: "Unable to create event"});
    }
}

module.exports = {
    createEvent: createEvent
};