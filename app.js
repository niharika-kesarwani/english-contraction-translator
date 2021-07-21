var btnTranslate = document.querySelector('#button');
var txtInput = document.querySelector("#input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/english-contraction.json"

function getURL(text) {
    return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("error: ", error);
    alert("Seems something is wrong with the server!")
};

function clickHandler() {

    var input = txtInput.value;

    fetch(getURL(input))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerText = json.contents.translated;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)