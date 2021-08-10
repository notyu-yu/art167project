// Using tutorial from https://www.geeksforgeeks.org/how-to-add-a-custom-right-click-menu-to-a-webpage/

document.oncontextmenu = rightClick;
document.onclick = hideStatic;

var currentOpacity = 0;
var rightClicking = false;

function hideStatic() {
    rightClicking = false;
    if (currentOpacity < 0.93) {
        document.getElementById("static-cover").style.visibility = "hidden";
        document.getElementById("pass-layer").style.visibility = "hidden";
    }
}

function moreOpacity() {
    currentOpacity += 0.02;
    console.log(`Current Sanity: ${100 - currentOpacity * 100}`)
    document.getElementById("static-cover").style.opacity = currentOpacity.toString();
    document.addEventListener('mousemove', (event) => {document.getElementById("pass-layer").style.clipPath = "circle(80px at " + event.clientX + "px " + event.clientY + "px)"});
    if (currentOpacity < 0.95 && rightClicking) {
        setTimeout(function(){moreOpacity()}, 100);
    } else if (currentOpacity >= 0.95) {
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("pass-layer").style.visibility = "hidden";
    }
}

function rightClick(clickEvent) {
    clickEvent.preventDefault();
    if (document.getElementById("static-cover").style.visibility == "visible") {
        hideStatic();
    } else {
        rightClicking = true;

        document.getElementById("static-cover").style.visibility = "visible";
        document.getElementById("pass-layer").style.visibility = "visible";
        moreOpacity();
    }
}