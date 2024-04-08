function acceptCookies() {
    // Set a cookie to remember the user's preference
    setCookie("cookieConsent", "accepted", 365); // Cookie expires in 365 days
    // Hide the cookie consent message
    document.getElementById("cookieConsent").style.display = "none";
}

function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Check if the user has previously accepted cookies
window.onload = function() {
    var cookieConsent = getCookie("cookieConsent");
    if (cookieConsent === "accepted") {
        // If cookies were previously accepted, hide the cookie consent message
        document.getElementById("cookieConsent").style.display = "none";
    }
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
