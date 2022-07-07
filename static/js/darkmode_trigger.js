/* jshint esversion: 11, jquery: true */
let allCookies = document.cookie.split(";").map((cookie) => cookie.trim());
let darkmode = 0;
if (allCookies && (allCookies.length > 0)) {
    for (let iIndex = 0; iIndex < allCookies.length; iIndex++) {
        let CookiePair = allCookies[iIndex].split("=");
        if ((CookiePair.length == 2) && (CookiePair[0] == 'darkmode')) {
            darkmode = parseInt(CookiePair[1]);
            if (darkmode == 1) {
                document.body.classList.add("godark");
            }
        }
    }
}