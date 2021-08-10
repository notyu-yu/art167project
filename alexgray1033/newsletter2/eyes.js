var sanity = 100;
var currentOpacity = 0;

function moreOpacity() {
    document.getElementById("eyes").style.visibility = "visible";
    currentOpacity += 0.008;
    sanity -= 0.5;
    console.log(`Current Sanity: ${sanity}`);
    document.getElementById("pwd").style.opacity = (currentOpacity+0.1).toString();
    document.getElementById("eyes").style.opacity = currentOpacity.toString();
    var node = document.createElement("img");
    node.setAttribute("class", "eye-img");
    node.setAttribute("src", "/assets/logo.png");
    node.setAttribute("width", "100px");
    node.style.top = Math.random()*100 + "vh";
    node.style.left = Math.random()*100 + "vw";
    document.getElementById("eyes").appendChild(node);
    if (sanity < 5) {
        document.getElementById("admin-login").style.visibility = "visible";
        return;
    }
    setTimeout(function(){moreOpacity()}, 300);
}

setTimeout(function(){moreOpacity()}, 120000);