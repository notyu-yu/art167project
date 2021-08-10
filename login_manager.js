// Referncing https://www.codegrepper.com/code-examples/javascript/javascript+check+if+url+file+exists for url exist check
function fileExist(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', filePath, false);
    xhr.send();

    return xhr.status !== 404;
}

document.getElementById("login-button").onclick = function() {
    var email = document.getElementById("email-entry").value;
    var password = document.getElementById("password-entry").value;
    if (email == "alex.gray1033@gmail.com" && fileExist("/puzzle_pieces/" + password + '.html')) {
        window.location.href = "/puzzle_pieces/" + password + ".html";
    } else {
        window.location.href = "invalid_cred.html";
    }
}