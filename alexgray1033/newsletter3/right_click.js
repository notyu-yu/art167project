// Tell the page to run our showMenu function on right click, and the hideMenu function on left click
document.oncontextmenu = showMenu;
document.onclick = hideMenu;
var lunacy = 0;
var showing = false;
var stuck = false;

function hideMenu() {
    // Hide our flashy menu
    document.getElementById("flashy-menu").style.visibility = "hidden";
}

function showMenu(clickEvent) {
    // Don't display the default right click menu
    clickEvent.preventDefault();
    if (!stuck) {
        // Get our menu element
        var menu = document.getElementById("flashy-menu");
        // Hide menu if its already visible
        if (menu.style.visibility == "visible") {
            hideMenu();
        } else {
            // Show it at cursor location otherwise
            menu.style.top = clickEvent.clientY + "px";
            menu.style.left = clickEvent.clientX + "px";
            menu.style.visibility = "visible";
        }
    }
}

document.getElementById('rainbow').onclick = function() {
    // Turn off popping if it's on
    if (document.getElementById("alex-content").classList.contains("poppy-rave")) {
        document.getElementById("alex-content").classList.toggle("poppy-rave");
        showing = false;
    }
    document.getElementById("alex-content").classList.toggle("rainbow-rave");
    showing = !showing;
    if (showing) {
        document.getElementById("lunacy-filter").style.visibility = "visible";
    } else {
        document.getElementById("lunacy-filter").style.visibility = "hidden";
    }
}

document.getElementById('pop').onclick = function() {
    // Turn off rainbow if it's on
    if (showing) {
        document.getElementById("alex-content").classList.toggle("rainbow-rave");
        document.getElementById("lunacy-filter").style.visibility = "hidden";
        showing = false;
    }
    document.getElementById("alex-content").classList.toggle("poppy-rave");
}

function lunacyTimer() {
    // Make lunacy stuff more visible
    if (showing) {
        lunacy += 0.5;
        console.log("Current Lunacy: " + lunacy);
        document.getElementById("lunacy-filter").style.opacity = (lunacy * 0.01).toString();
        passLetters = document.getElementsByClassName("pass");
        for (var i = 0; i < passLetters.length; i++) {
            passLetters[i].style.filter = "grayscale(" + (lunacy + 40).toString() + "%) brightness(" + (100 - lunacy) + "%)";
        }
    }
    // Show warning after threshold
    if (lunacy > 95) {
        stuck = true;
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("lunacy-filter").style.visibility = "visible";
        return;
    }
    setTimeout(function(){lunacyTimer()}, 100);
}

lunacyTimer();