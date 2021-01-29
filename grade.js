let score = prompt("Please enter your score :)");
let prefix = "You got grade ";

if(score >= 80){
    document.getElementById("result").innerHTML = prefix + "A";
}
else if(score >= 70){
    document.getElementById("result").innerHTML = prefix + "B";
}
else if(score >= 60){
    document.getElementById("result").innerHTML = prefix + "C";
}
else if(score >= 50){
    document.getElementById("result").innerHTML = prefix + "D";
}
else if(score < 50){
    document.getElementById("fail").innerHTML = "You FAIL :(";
}
else{
    document.getElementById("fail").innerHTML = "Please enter number again!";
}