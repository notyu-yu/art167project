// Tell the page to run our showMenu function on right click, and the hideMenu function on left click
document.oncontextmenu = showMenu;
document.onclick = hideMenu;

function hideMenu() {
    console.log("hide menu");
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
        console.log("show menu");
        // Show it at cursor location otherwise
        menu.style.top = clickEvent.clientY + "px";
        menu.style.left = clickEvent.clientX + "px";
        menu.style.visibility = "visible";
    }
}

document.getElementById('rainbow').onclick = function() {
    // Turn off popping if it's on
    if (document.body.classList.contains("poppy-rave")) {
        document.body.classList.toggle("poppy-rave");
    }
    document.body.classList.toggle("rainbow-rave");
}

document.getElementById('pop').onclick = function() {
    // Turn off rainbow if it's on
    if (document.body.classList.contains("rainbow-rave")) {
        document.body.classList.toggle("rainbow-rave");
    }
    document.body.classList.toggle("poppy-rave");
}