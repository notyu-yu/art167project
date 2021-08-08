// Using tutorial from https://www.geeksforgeeks.org/how-to-add-a-custom-right-click-menu-to-a-webpage/

document.oncontextmenu = rightClick;
document.onclick = hideStatic;

var currentOpacity = 0;
var rightClicking = false;

function hideStatic() {
    console.log("hiding static");
    rightClicking = false;
    if (currentOpacity < 0.93) {
        document.getElementById("static-cover").style.visibility = "hidden";
        document.getElementById("pass-layer").style.visibility = "hidden";
    }
}

function moreOpacity() {
    console.log("more opacity");
    currentOpacity += 0.005;
    document.getElementById("static-cover").style.opacity = currentOpacity.toString();
    document.addEventListener('mousemove', (event) => {document.getElementById("pass-layer").style.clipPath = "circle(80px at " + event.clientX + "px " + event.clientY + "px)"});
    if (currentOpacity < 0.95 && rightClicking) {
        setTimeout(function(){moreOpacity()}, 100);
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