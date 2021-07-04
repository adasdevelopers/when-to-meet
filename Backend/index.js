const express = require("express");
const cors = require("cors");
const MongoClient = require ("mongodb").MongoClient;

const Event = require('./models/Event');
const Attendee = require('./models/Attendee');

const CreateEvent = require('./apiRoutes/CreateEvent');
const CreateAttendee = require('./apiRoutes/CreateAttendee');
const GetEvent = require('./apiRoutes/GetEvent');
const GetAvailabilities = require("./apiRoutes/GetAvailabilities");
const app = express();

app.use(express.json());
app.use(cors({origin: true}));

// WE NEED TO SET THIS UP AS ENV VARIABLE
const client = new MongoClient("mongodb+srv://aryan:abcd1234@cluster0.bh2pi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true});
client.connect();

app.post('/createevent', (req, res) => { CreateEvent.createEvent(req, res, client.db("When2Meet"), Event) });
app.post('/createattendee', (req, res) => { CreateAttendee.createAttendee(req, res, client.db("When2Meet"), Attendee) });
app.post('/getevent', (req, res) => { GetEvent.getEvent(req, res, client.db("When2Meet")) });
app.post('/getavailabilities', (req, res) => {  GetAvailabilities.getAvailabilities(req, res, client.db("When2Meet"))  });

app.listen(3000, () => console.log("Server running on port 3000"));
