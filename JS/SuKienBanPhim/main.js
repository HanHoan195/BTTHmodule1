function upArrow() {
    let elenment = document.getElementById("spider");
    elenment.style.top = parseInt(elenment.style.top) - 10 + 'px';
}
function downArrow() {
    var elenment = document.getElementById("spider");
    elenment.style.top = parseInt(elenment.style.top) + 10 + 'px';
}
function leftArrow() {
    var elenment = document.getElementById("spider");
    elenment.style.left = parseInt(elenment.style.left) - 10 + 'px';
}git
function rightArrow() {
    var elenment = document.getElementById("spider");
    elenment.style.left = parseInt(elenment.style.left) + 10 + 'px';
}
function moveSec(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrow();
            break;
        case 39:
            rightArrow();
            break;
        case 38:
            upArrow();
            break;
        case 40:
            downArrow();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSec);
}