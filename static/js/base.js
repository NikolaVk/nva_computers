/* jshint esversion: 11, jquery: true */
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


function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}