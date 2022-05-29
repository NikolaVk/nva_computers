                // FOR TOUTCH
                let isTouched = false;
                let subMenuHandlers = document.getElementsByClassName('submenu_handling');
                if (subMenuHandlers) {
                    for (let iCounter = 0; iCounter < subMenuHandlers.length; iCounter++) {
                        let subMenuHandler = subMenuHandlers[iCounter];
                        (function(subMenuHandler) {
                            subMenuHandlers[iCounter].addEventListener('touchstart', function(event) {
                                isTouched = true;
                                let subMainContainer = subMenuHandler.parentElement.getElementsByClassName('submenu_container');
                                if (subMainContainer && subMainContainer.length == 1) {
                                    if (subMainContainer[0].classList.contains("shown_submenu")) {
                                        subMainContainer[0].classList.remove("shown_submenu");
                                        subMainContainer[0].style.display = "none";
                                    } else {
                                        let allSubMenus = document.getElementsByClassName("submenu_container");
                                        if (allSubMenus) {
                                            for (let iIndex = 0; iIndex < allSubMenus.length; iIndex++) {
                                                if (allSubMenus[iIndex].classList.contains("shown_submenu")) {
                                                    allSubMenus[iIndex].classList.remove("shown_submenu");
                                                    allSubMenus[iIndex].style.display = "none";
                                                }
                                            }
                                        }
                                        subMainContainer[0].classList.add("shown_submenu");
                                        subMainContainer[0].style.display = "block";


                                    }
                                }
                                event.stopPropagation();

                            });
                            subMenuHandlers[iCounter].addEventListener('click', function(event) {
                                if (isTouched) {
                                    event.stopPropagation();
                                }

                            });
                        })(subMenuHandler);

                    }
                }
                //                  }


                function is_touch_enabled() {
                    return ('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0);
                }

                //DARKMODE

                let allCookies = document.cookie.split(";").map((cookie) => cookie.trim());
                let darkmode = 0;
                if (allCookies && (allCookies.length > 0)) {
                    for (let iIndex = 0; iIndex < allCookies.length; iIndex++) {
                        let CookiePair = allCookies[iIndex].split("=");
                        if ((CookiePair.length == 2) && (CookiePair[0] == 'darkmode')) {
                            darkmode = parseInt(CookiePair[1]);
                            if (darkmode == 1) {
                                //                      window.addEventListener('load', function() {
                                setdarkmode();
                                //                      });
                            }
                        }
                    }
                }

                function setlightmode() {
                    let darkModeButton = document.getElementById("darkmode");
                    let lightModeButton = document.getElementById("lightmode");

                    darkModeButton.classList.add("darkmode_enabled");
                    lightModeButton.classList.add("darkmode_disabled");
                    darkModeButton.classList.remove("darkmode_disabled");
                    lightModeButton.classList.remove("darkmode_enabled");

                    let allElements = document.getElementsByTagName("*");
                    for (let iIndex = 0; iIndex < allElements.length; iIndex++) {
                        allElements[iIndex].classList.remove("godark");
                    }
                    document.cookie = "darkmode=0;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
                }

                function setdarkmode() {
                    let darkModeButton = document.getElementById("darkmode");
                    let lightModeButton = document.getElementById("lightmode");

                    darkModeButton.classList.add("darkmode_disabled");
                    lightModeButton.classList.add("darkmode_enabled");
                    darkModeButton.classList.remove("darkmode_enabled");
                    lightModeButton.classList.remove("darkmode_disabled");

                    let allElements = document.getElementsByTagName("*");
                    for (let iIndex = 0; iIndex < allElements.length; iIndex++) {
                        allElements[iIndex].classList.add("godark");
                    }

                    document.cookie = "darkmode=1;path=/;expires=" + ((new Date()).getTime() + (365 * 24 * 3600 * 1000));
                }