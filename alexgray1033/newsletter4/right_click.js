// Tell the page to run our showMenu function on right click, and the hideMenu function on left click
document.oncontextmenu = showMenu;
document.onclick = hideMenu;
var val = 50;
var raving = false;
var popping = false;
var maxSanity = 0;
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
    if (popping) {
        document.getElementById("alex-content").classList.toggle("poppy-rave");
        popping = false;
        document.getElementById("static-cover").style.visibility = "hidden";
    }
    document.getElementById("alex-content").classList.toggle("rainbow-rave");
    raving = !raving;
    if (raving) {
        document.getElementById("lunacy-filter").style.visibility = "visible";
    } else {
        document.getElementById("lunacy-filter").style.visibility = "hidden";
    }
}

document.getElementById('pop').onclick = function() {
    // Turn off rainbow if it's on
    if (raving) {
        document.getElementById("alex-content").classList.toggle("rainbow-rave");
        document.getElementById("lunacy-filter").style.visibility = "hidden";
        raving = false;
    }
    document.getElementById("alex-content").classList.toggle("poppy-rave");
    popping = !popping;
    if (popping) {
        document.getElementById("static-cover").style.visibility = "visible";
    } else {
        document.getElementById("static-cover").style.visibility = "hidden";
    }
}

function lunacyTimer() {
    if (raving) {
        // Lunacy stuff become more visible
        val += 1;
        if (val > maxSanity) {
            maxSanity = val;
        }
        console.log("Current Lunacy: " + val);
        document.getElementById("lunacy-filter").style.visibility = "visible";
        document.getElementById("lunacy-filter").style.opacity = ((val - 50) * 0.02).toString();
        passLetters = document.getElementsByClassName("pass");
        for (var i = 0; i < passLetters.length; i++) {
            passLetters[i].style.filter = "grayscale(" + (val + 40).toString() + "%) brightness(" + (100 - val) + "%)";
        }
    } else if (popping) {
        // Sanity stuff become more visible
        val -= 1;
        if (maxSanity - val > 60) {
            var wordList = document.getElementsByClassName("word");
            for (var i = 0; i < wordList.length; i++) {
                wordList[i].style.display = "inline";
            }
        }
        document.getElementById("static-cover").style.visibility = "visible";
        document.getElementById("static-cover").style.opacity = ((50 - val) * 0.02).toString();
        console.log("Current Sanity: " + val);
    }
    // Show warning after lunaty and sanity thresholds
    if (val > 95) {
        stuck = true;
        document.getElementById("admin-warning").style.color = "var(--lunar-blue)";
        document.getElementById("value-name").innerHTML = "Maximum Lunacy";
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("lunacy-filter").style.visibility = "visible";
        return;
    }
    if (val < 5) {
        stuck = true;
        document.getElementById("value-name").innerHTML = "Minimum Sanity";
        document.getElementById("admin-login").style.visibility = "visible";
        document.getElementById("static-cover").style.visibility = "visible";
        return;
    }
    setTimeout(function(){lunacyTimer()}, 100);
}

lunacyTimer();