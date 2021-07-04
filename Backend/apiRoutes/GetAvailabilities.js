const getAvailabilities = async (req, res, database) => {
    try {
      const o_id = new require('mongodb').ObjectID(req.body.eventUrl);
      database.collection('Attendee').find({"eventId": req.body.eventUrl}).toArray(function(err, result) {
        if(err) throw err;
        return res.status(200).json(result);
    });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "Unable to fetch attendees" });
    }
  };
  
  module.exports = {
    getAvailabilities: getAvailabilities,
  };
  