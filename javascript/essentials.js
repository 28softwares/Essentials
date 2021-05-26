/*
 Essentials.js is simple js code which contain all basic and essential javascript
 functions for the website development. 
 AUTHOR : Saroj Dahal / @isarojdahal
 VERSION: 1.0.0
*/

function convertDateToSQLFormat(paramDate) {
  // if date is not given, converts current date to SQL Format.
  //  else the given data is convert to SQL format.
  if (paramDate != null)
    return paramDate.toISOString().slice(0, 19).replace("T", " ");
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

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

//Playing With URL (Might be needed sometimes when URL needs to be used and played with using javascript)

//Remove a particular parameter from a URL

function removeURLParameter(url, parameter) {
  url = url.split("#")[0];
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    var prefix = encodeURIComponent(parameter) + "=";
    var pars = urlparts[1].split(/[&;]/g);
    for (var i = pars.length; i-- > 0; ) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }
    url = urlparts[0] + "?" + pars.join("&");
    return url;
  } else {
    return url;
  }
}

//Add a particular or a list of parameters to a URL

function addParams(url, data) {
  if (!$.isEmptyObject(data)) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + $.param(data);
  }

  return url;
}

//Get a value of parameter from URL

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
}
