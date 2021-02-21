import 'package:flutter/material.dart';
import 'package:when2meet_dupe/utilities/constant.dart';

class EventScheduleUi extends StatefulWidget {
  @override
  _EventScheduleUiState createState() => _EventScheduleUiState();
}

class _EventScheduleUiState extends State<EventScheduleUi> {
  String eventName = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _buildScheduleUi(),
    );
  }

/**
 * This function is the function that will call all the other function to build our UI. In
 * turn this function will be called within our body (inside our widget build) to display
 * all the UI elements
 */
  Widget _buildScheduleUi() {
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          SizedBox(height: 60),
          _paddingText("Create an Event"),
          Padding(
            padding: const EdgeInsets.all(30),
            child: Center(
              child: Wrap(
                spacing: 30,
                runSpacing: 20,
                children: <Widget>[
                  _evenTitle(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _evenTitle() {
    return Container(
      child: Column(
        children: <Widget>[
          Text(
            'Event Title',
            style: TextStyle(
              color: Colors.black,
              fontWeight: FontWeight.bold,
              fontSize: 30,
            ),
            textAlign: TextAlign.left,
          ),
          SizedBox(height: 10),
          Container(
            alignment: Alignment.centerLeft,
            decoration: kBoxDecorationStyle,
            height: 60.0,
            child: TextFormField(
              keyboardType: TextInputType.name,
              style: TextStyle(
                color: Colors.white,
                fontFamily: 'OpenSans',
              ),
              decoration: InputDecoration(
                border: InputBorder.none,
                contentPadding: EdgeInsets.all(20.0),
                hintText: 'Enter Event Name',
                hintStyle: kHintTextStyle,
              ),
              validator: (val) =>
                  val.isEmpty ? "Please enter the event name" : null,
              onChanged: (value) {
                setState(() => eventName = value);
              },
            ),
          ),
        ],
      ),
    );
  }

  Widget _paddingText(String text) {
    return Padding(
      padding: const EdgeInsets.all(70.0),
      child: Text(
        text,
        style: TextStyle(
            color: Colors.black, fontSize: 28.0, fontWeight: FontWeight.bold),
        textAlign: TextAlign.start,
      ),
    );
  } //_paddingText

}
