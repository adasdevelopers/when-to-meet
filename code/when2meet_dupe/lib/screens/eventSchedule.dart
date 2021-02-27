import 'package:flutter/material.dart';
import 'package:when2meet_dupe/utilities/constant.dart';

class EventScheduleUi extends StatefulWidget {
  @override
  _EventScheduleUiState createState() => _EventScheduleUiState();
}

class _EventScheduleUiState extends State<EventScheduleUi> {
  String eventName = "";
  final timeSchedule = ["Today", "Specific Dates", "Days of the week"];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: _buildScheduleUi(),
      ),
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
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          SizedBox(height: 60),
          _paddingText("Create an Event", 50),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Align(
              alignment: Alignment.center,
              child: Wrap(
                spacing: 10,
                runSpacing: 20,
                children: <Widget>[
                  _createEventSetUp(),
                  // SizedBox(height: 10),
                  _scheduleFor(),
                  _hoursToSchedule(),
                  //_createEventBtn()
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

//   Widget _createEventBtn() {
//     return Container(
//       padding: EdgeInsets.symmetric(vertical: 20.0),
//       //height: 500.0,
//       width: 500,
//       child: RaisedButton(
//           elevation: 5.0,
// //onPressed: () => HomeScreen,
//           padding: EdgeInsets.all(15.0),
//           shape: RoundedRectangleBorder(
//             borderRadius: BorderRadius.circular(30.0),
//           ),
//           color: Colors.blue,
//           child: Text(
//             'Create Event',
//             style: TextStyle(
//               color: Colors.white,
//               letterSpacing: 1.5,
//               fontSize: 18.0,
//               fontWeight: FontWeight.bold,
//               fontFamily: 'OpenSans',
//             ),
//           ),
//           onPressed: () async {} // OnPressed
//           ),
//     );
//   }

  Widget _scheduleFor() {
    return Container(
      child: Column(
        children: <Widget>[
          _paddingText("Schedule For", 25),
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
                hintText: 'Enter When you want to schedule',
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

  // WORKING CODE FOR DROP DOWN MENU --> do not uncomment or remove

  // Widget _scheduleFor() {
  //   return Container(
  //     child: Column(
  //       children: <Widget>[
  //         _paddingText("Schedule for", 25),
  //         SizedBox(height: 10),
  //         Container(
  //           alignment: Alignment.topLeft,
  //           decoration: kBoxDecorationStyle,
  //           height: 60.0,
  //           width: 500,
  //           child: FormField(
  //             builder: (FormFieldState state) {
  //               return InputDecorator(
  //                 decoration: InputDecoration(
  //                   border: InputBorder.none,
  //                   contentPadding: EdgeInsets.all(20.0),
  //                   hintText: 'Enter Event Name',
  //                   hintStyle: kHintTextStyle,
  //                 ),
  //                 child: DropdownButtonHideUnderline(
  //                   child:DropdownButton(
  //                     value: value;
  //                   ),
  //                   ),
  //               );
  //             },
  //           ),
  //         ),
  //       ],
  //     ),
  //   );
  // }

  Widget _hoursToSchedule() {
    return Container(
      child: Column(
        children: <Widget>[
          _paddingText("Time", 25),
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
                hintText: 'What time?',
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
