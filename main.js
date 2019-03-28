function getHistory() {
    document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutPut() {
    return document.getElementById("output-value").innerText;
}

function printOutPut(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {

        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutPut("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutPut()).toString();
            if (output) { //If output has a value
                output = output.substr(0, output.length - 1);
                printOutPut(output);
            }
        }else{
            var output =getOutPut();
            var history=getHistory();
            if(output != ""){
                output=reverseNumberFormat(output);
                history = history + output;
                if(this.id === "="){
                    var result = eval(history);
                    printOutPut(result);
                    printHistory("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutPut())
        if (output != NaN) { //If output is a number
            output = output + this.id;
            printOutPut(output);

        }
    })
}