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

//Network Functions

function isOnline(){ //Checks Internet Connection

    return (window.navigator.onLine)?true:false;
}

function lookupInfo(){ //Gets Vistors information ( like country,network,long-lat

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://ip-api.com/json",true);

    xhttp.onload = function(){
    if(this.readyState ==4 && this.status == 200){
        
        var data = JSON.parse(xhttp.responseText);
        // console.log(data["country"]); // Gets Country Name

        }
    };

    xhttp.send();
} 




