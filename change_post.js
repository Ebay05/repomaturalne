function changeContent() {
    "use strict";
    const bodyChange = document.getElementsByTagName("body");
    bodyChange[0].innerHTML = "dddd";
}

document.querySelector('.circleRenesans').addEventListener("click", changeContent, true);