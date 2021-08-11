// Referncing https://www.codegrepper.com/code-examples/javascript/javascript+check+if+url+file+exists for url exist check
function fileExist(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', filePath, false);
    xhr.send();

    return xhr.status !== 404;
}

document.getElementById("register-button").onclick = function() {
    var key = document.getElementById("key-entry").value;
    if (fileExist("/end/" + key + '.html')) {
        window.location.href = "/end/" + key + ".html";
    } else {
        window.location.href = "invalid_cred.html";
    }
}