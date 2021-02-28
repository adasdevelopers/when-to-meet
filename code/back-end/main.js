const MongoClient = require ("mongodb").MongoClient;

// WE NEED TO SET THIS UP AS ENV VARIABLE
const client = new MongoClient("mongodb+srv://aryan:abcd1234@cluster0.bh2pi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true});

// client.connect().then(result => {
//     const database = client.db("When2Meet");
//     const collection = database.collection("Event");
//     console.log(result);
// }, error => {
//     console.error(error);
// });


(async () =>{
    await client.connect();
    const database = client.db("When2Meet");
    const collectionEvent = database.collection("Event");
    const collectionAttendee = database.collection("Attendee");

    // add temporary data

    const result = await collectionEvent.insertOne({
        "name" : "First event",
        "time" : "12 :30 pm",
        "attendee":collectionAttendee,
        "eventUrl": "testURL"
    });

    collectionAttendee.insertOne({
        "firstName" :"Arnold",
        "email" : null,
        "availability": {
            "tuesday" : 2,
            "weneday" : 4
        }

    });
    console.log((await result).insertedId);
    client.close();
})();
