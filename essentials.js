/*
 Essentials.js is simple js code which contain all basic and essential javascript
 functions for the website development. 
 AUTHOR : Saroj Dahal / @originalsaroj
 VERSION: 1.0.0
*/

//Function for cookies

function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

function isOnline(){

	return (window.navigator.onLine)?true:false;
}



