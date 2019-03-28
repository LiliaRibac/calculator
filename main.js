function getHistory(){
    document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutPut(){
    return document.getElementById("output-value").innerText;
}
function printOutPut(num){
    if (num==""){
    document.getElementById("output-value").innerText=num;
} else {

    document.getElementById("output-value").innerText=getFormattedNumber(num);
}
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
 return Number(num.replace(/,/g,''));
}