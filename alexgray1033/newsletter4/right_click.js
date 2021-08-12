// Tell the page to run our showMenu function on right click, and the hideMenu function on left click
document.oncontextmenu = showMenu;
document.onclick = hideMenu;
var val = 50;
var raving = false;
var popping = false;
var maxSanity = 0;

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
        popping = false;
    }
    document.getElementById("alex-content").classList.toggle("rainbow-rave");
    raving = !raving;
}

document.getElementById('pop').onclick = function() {
    // Turn off rainbow if it's on
    if (document.getElementById("alex-content").classList.contains("rainbow-rave")) {
        document.getElementById("alex-content").classList.toggle("rainbow-rave");
        raving = false;
    }
    document.getElementById("alex-content").classList.toggle("poppy-rave");
    popping = !popping;
}

function lunacyTimer() {
    if (raving) {
        val += 1;
        if (val > maxSanity) {
            maxSanity = val;
        }
        console.log("Current Lunacy: " + val);
    } else if (popping) {
        val -= 1;
        if (maxSanity - val > 60) {
            var wordList = document.getElementsByClassName("word");
            for (var i = 0; i < wordList.length; i++) {
                wordList[i].style.display = "inline";
            }
        }
        console.log("Current Sanity: " + val);
    }
    if (val > 95) {
        document.getElementById("value-name").innerHTML = "Maximum Lunacy";
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("lunacy-filter").style.visibility = "visible";
        return;
    }
    if (val < 5) {
        document.getElementById("value-name").innerHTML = "Minimum Sanity";
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("static-cover").style.visibility = "visible";
        return;
    }
    setTimeout(function(){lunacyTimer()}, 100);
}

lunacyTimer();