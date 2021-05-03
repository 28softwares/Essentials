/*
 Essentials.dart is collection of simple and most useful dart functions  which contain all basic and essential dart
 functions for the Flutter app development
 AUTHOR : Saroj Dahal / isarojdahal
 VERSION: 1.0.0
*/

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class AppColor {
  static MaterialColor PRIMARY_COLOR = COLOR;
  static const SECONDARY_COLOR = COLOR;
  static Color HEADING_TEXT_COLOR = COLOR;
  static Color NORMAL_TEXT_COLOR = COLOR;
}

//while adding content, call this fxn
addPadding(double topValue) {
  return Padding(padding: EdgeInsets.only(top: topValue));
}

//Pass the title, and message to showAlertDialog and alert Box is yours

showAlertDialog(BuildContext context, String title, String message) {
  // set up the button
  Widget okButton = FlatButton(
    child: Text("OK"),
    onPressed: () => Navigator.pop(context),
  );

  // set up the AlertDialog
  AlertDialog alert = AlertDialog(
    title: Text(title),
    content: Text(message),
    actions: [
      okButton,
    ],
  );

  // show the dialog
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return alert;
    },
  );
}

//pass list of string in order to validate whether the given field is empty or not
// useful else than checking field one by one.
validateFields(List<String> fields) {
  for (int i = 0; i < fields.length; i++) {
    if (fields[i].isEmpty) return false;
  }

  return true;
}

String removeAllHtmlTags(String htmlText) {
  RegExp exp = RegExp(r"<[^>]*>", multiLine: true, caseSensitive: true);

  return htmlText.replaceAll(exp, '');
}

showToast(String message) {
  return Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 1,
      backgroundColor: PRIMARY_COLOR,
      textColor: Colors.white,
      fontSize: 16.0);
}

//convert R,G,B Color to Flutter Material Color

//usuage :
// MaterialColor PRIMARY_COLOR = MaterialColor(0xFF997D90, convertToMaterialColor(153, 125, 144));
convertToMaterialColor(int r, int g, int b) {
  Map<int, Color> color = {
    50: Color.fromRGBO(r, g, b, .1),
    100: Color.fromRGBO(r, g, b, .2),
    200: Color.fromRGBO(r, g, b, .3),
    300: Color.fromRGBO(r, g, b, .4),
    400: Color.fromRGBO(r, g, b, .5),
    500: Color.fromRGBO(r, g, b, .6),
    600: Color.fromRGBO(r, g, b, .7),
    700: Color.fromRGBO(r, g, b, .8),
    800: Color.fromRGBO(r, g, b, .9),
    900: Color.fromRGBO(r, g, b, 1),
  };

  return color;
}

wrapWithGesture(BuildContext context, childParam, route) {
  return GestureDetector(
      child: childParam,
      onTap: () => Navigator.push(
          context, MaterialPageRoute(builder: (context) => route)));
}
