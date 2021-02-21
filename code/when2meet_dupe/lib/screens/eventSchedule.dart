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
          _paddingText("Create an Event", 50),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Align(
              alignment: Alignment.topLeft,
              child: Wrap(
                spacing: 10,
                runSpacing: 20,
                children: <Widget>[
                  _createEventSetUp(),
                  SizedBox(height: 100),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _createEventSetUp() {
    return Container(
      child: Column(
        children: <Widget>[
          _paddingText("Event Title", 25),
          SizedBox(height: 10),
          Container(
            alignment: Alignment.topLeft,
            decoration: kBoxDecorationStyle,
            height: 60.0,
            width: 500,
            child: TextFormField(
              keyboardType: TextInputType.name,
              style: TextStyle(
                color: Colors.black,
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



  Widget _paddingText(String text, double size) {
    return Padding(
      padding: const EdgeInsets.all(40.0),
      child: Text(
        text,
        style: TextStyle(
            color: Colors.black, fontSize: size, fontWeight: FontWeight.bold),
        textAlign: TextAlign.center,
      ),
    );
  } //_paddingText

}
