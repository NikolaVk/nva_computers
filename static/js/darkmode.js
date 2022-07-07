/* jshint esversion: 11, jquery: true */
if (darkmode == 1) {
    setdarkmode();
}

function setlightmode(event) {

    let darkModeButtons = document.getElementsByClassName("darkmode-btt");
    let lightModeButtons = document.getElementsByClassName("lightmode-btt");
    var Index;

    for (Index = 0; Index < darkModeButtons.length; Index++) {
        darkModeButtons[Index].classList.add("darkmode_enabled");
        darkModeButtons[Index].classList.remove("darkmode_disabled");
    }
    for (Index = 0; Index < darkModeButtons.length; Index++) {
        lightModeButtons[Index].classList.add("darkmode_disabled");
        lightModeButtons[Index].classList.remove("darkmode_enabled");
    }
    if (darkmode == 1) {
        darkmode = 0;
        document.cookie = "darkmode=0;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
    }
    document.body.classList.remove("godark");
}

function setdarkmode(event) {

    let darkModeButtons = document.getElementsByClassName("darkmode-btt");
    let lightModeButtons = document.getElementsByClassName("lightmode-btt");
    var Index;

    for (Index = 0; Index < darkModeButtons.length; Index++) {
        darkModeButtons[Index].classList.add("darkmode_disabled");
        darkModeButtons[Index].classList.remove("darkmode_enabled");
    }
    for (Index = 0; Index < darkModeButtons.length; Index++) {
        lightModeButtons[Index].classList.add("darkmode_enabled");
        lightModeButtons[Index].classList.remove("darkmode_disabled");
    }
    if (darkmode != 1) {
        darkmode = 1;
        document.cookie = "darkmode=1;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
    }
    document.body.classList.add("godark");
}