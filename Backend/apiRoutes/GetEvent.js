const getEvent = async (req, res, database) => {
  try {
    const o_id = new require('mongodb').ObjectID(req.body.eventUrl);
    result = await database
      .collection("Event")
      .findOne({ '_id': o_id })
      .then((resul) => {
        return res.status(200).json(resul);
      });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Unable to fetch event" });
  }
};

module.exports = {
  getEvent: getEvent,
};
