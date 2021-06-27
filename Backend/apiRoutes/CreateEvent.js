const createEvent = async (req, res, database, Event) => {
  try {
    const event = new Event({
      eventName: req.body.eventName,
      eventStartTime: req.body.eventStartTime,
      eventEndTime: req.body.eventEndTime,
      attendeeId: req.body.attendeeId,
      eventStartDate: req.body.startDate,
      numOfDays: req.body.numOfDays,
      differentDays: req.body.differentDays,
    });

    result = await database.collection("Event").insertOne(event);
    console.log((await result).insertedId);
    return res.status(200).json({
      createdObjectId: result.insertedId,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Unable to create event" });
  }
};

module.exports = {
  createEvent: createEvent,
};
