const getEvent = async(req, res, database) => {
    try {
        result = await database.collection("Event").findOne({eventUrl: req.body.eventUrl});
        console.log((await result));
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({message: "Unable to fetch event"});
    }
}

module.exports = {
    getEvent: getEvent
};