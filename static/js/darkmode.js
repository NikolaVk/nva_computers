if (darkmode == 1) {
    setdarkmode();
}

/*
function getCookie() {
    const name = 'darkmode' + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
};
*/


function setlightmode(event) {

    let darkModeButtons = document.getElementsByClassName("darkmode-btt");
    let lightModeButtons = document.getElementsByClassName("lightmode-btt");

    for (var Index = 0; Index < darkModeButtons.length; Index++) {
        darkModeButtons[Index].classList.add("darkmode_enabled");
        darkModeButtons[Index].classList.remove("darkmode_disabled");
    }
    for (var Index = 0; Index < darkModeButtons.length; Index++) {
        lightModeButtons[Index].classList.add("darkmode_disabled");
        lightModeButtons[Index].classList.remove("darkmode_enabled");
    }

    //      document.body.classList.remove("godark");
    //                   let allElements = document.getElementsByTagName("*");
    //                   for (let iIndex = 0; iIndex < allElements.length; iIndex++) {
    //                       allElements[iIndex].classList.remove("godark");
    //                   }
    if (darkmode == 1) {
        darkmode = 0;
        document.cookie = "darkmode=0;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
    }
    document.body.classList.remove("godark");
    event.stopPropagation();
}

function setdarkmode(event) {
    /*
        const darkmode = getCookie();
        if (darkmode && reload == false) {
            if (darkmode == '1') {
                console.log(true)
                return setlightmode()
            };
        }
    */

    let darkModeButtons = document.getElementsByClassName("darkmode-btt");
    let lightModeButtons = document.getElementsByClassName("lightmode-btt");

    for (var Index = 0; Index < darkModeButtons.length; Index++) {
        darkModeButtons[Index].classList.add("darkmode_disabled");
        darkModeButtons[Index].classList.remove("darkmode_enabled");
    }
    for (var Index = 0; Index < darkModeButtons.length; Index++) {
        lightModeButtons[Index].classList.add("darkmode_enabled");
        lightModeButtons[Index].classList.remove("darkmode_disabled");
    }


    //       document.body.classList.add("godark");

    //                    let allElements = document.getElementsByTagName("*");
    //                    for (let iIndex = 0; iIndex < allElements.length; iIndex++) {
    //                        allElements[iIndex].classList.add("godark");
    //                    }

    if (darkmode != 1) {
        darkmode = 1;
        document.cookie = "darkmode=1;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
    }
    document.body.classList.add("godark");
}