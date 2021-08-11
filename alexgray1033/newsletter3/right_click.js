// Tell the page to run our showMenu function on right click, and the hideMenu function on left click
document.oncontextmenu = showMenu;
document.onclick = hideMenu;
var lunacy = 0;
var showing = false;

function hideMenu() {
    // Hide our flashy menu
    document.getElementById("flashy-menu").style.visibility = "hidden";
}

function showMenu(clickEvent) {
    // Don't display the default right click menu
    clickEvent.preventDefault();
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

document.getElementById('rainbow').onclick = function() {
    // Turn off popping if it's on
    if (document.getElementById("alex-content").classList.contains("poppy-rave")) {
        document.getElementById("alex-content").classList.toggle("poppy-rave");
    }
    document.getElementById("alex-content").classList.toggle("rainbow-rave");
    showing = !showing;
}

document.getElementById('pop').onclick = function() {
    // Turn off rainbow if it's on
    if (document.getElementById("alex-content").classList.contains("rainbow-rave")) {
        document.getElementById("alex-content").classList.toggle("rainbow-rave");
    }
    document.getElementById("alex-content").classList.toggle("poppy-rave");
}

function lunacyTimer() {
    if (showing) {
        lunacy += 0.5;
        console.log("Current Lunacy: " + lunacy);
    }
    if (lunacy > 95) {
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("lunacy-filter").style.visibility = "visible";
        return;
    }
    setTimeout(function(){lunacyTimer()}, 100);
}

lunacyTimer();