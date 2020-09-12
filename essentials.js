/*
 Essentials.js is simple js code which contain all basic and essential javascript
 functions for the website development. 
 AUTHOR : Saroj Dahal / @originalsaroj
 VERSION: 1.0.0
*/

function copyit(theField) {
  var selectedText = document.selection;
  if (selectedText.type == "Text") {
    var newRange = selectedText.createRange();
    theField.focus();
    theField.value = newRange.text;
  } else alert("select a text in the page and then press this button");
}

//Function for cookies

function setCookie(key, value, expiry) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
  var keyValue = getCookie(key);
  setCookie(key, keyValue, "-1");
}

//Network Functions

function isOnline() {
  //Checks Internet Connection

  return window.navigator.onLine ? true : false;
}

//Gets Vistors information ( like country,network,long-lat
function lookupInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://ip-api.com/json", true);

  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      // console.log(data["country"]); // Gets Country Name
    }
  };

  xhttp.send();
}

//Returns Formatted date

function showDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "-" + curr_month + "-" + curr_year;
}

//Add Bookmark

function addBookmark(url, siteName) {
  window.external.AddFavorite(url, siteName);
}

//Redirect to given URL with certain delay

function redirectTo(url, seconds) {
  setTimeout(`window.location.href ='${url}'`, seconds * 1000);
}
