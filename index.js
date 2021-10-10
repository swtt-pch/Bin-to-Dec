var binary;
var decimal = 0;
function converter() {
    binary = document.querySelector("#inp-binary").value
    for (let index = 0; index <= binary.length; index++) {
        if (binary.charAt((binary.length-1)-index)=="1") {
            decimal += 2 ** index
        }
    }
    document.getElementById("span-show-decimal").innerHTML = decimal
    decimal = 0
}