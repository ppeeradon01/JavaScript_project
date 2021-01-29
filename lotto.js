let userlotto = prompt("Please enter your lotto number (0-99)")
let result = Math.floor(Math.random() * 100);

document.getElementById("userlotto").innerHTML = userlotto;
document.getElementById("result").innerHTML = result;

if(userlotto === result){
    document.getElementById("congrat").innerHTML = "Congratulation, You won LOTTERY";
}
else {
    document.getElementById("sorry").innerHTML = "SORRY!, Better luck next time";
}

function reloadPage(){
    location.reload();
}