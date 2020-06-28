/*
 Essentials.dart is collection of simple and most useful dart functions  which contain all basic and essential dart
 functions for the Flutter app development
 AUTHOR : Saroj Dahal / @originalsaroj
 VERSION: 1.0.0
*/


import 'package:flutter/material.dart';

//while adding content, call this fxn
addPadding() {
  return Padding(padding: EdgeInsets.only(top: 12.0));
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
