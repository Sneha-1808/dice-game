var randomNo1;
randomNo1=Math.random();
randomNo1=Math.floor(randomNo1*6)+1;
console.log(randomNo1);

var randomImage1= "images/dice"+ randomNo1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);



var randomNo2;
randomNo2=Math.random();
randomNo2=Math.floor(randomNo2*6)+1;
console.log(randomNo2);

var randomImage2= "images/dice"+randomNo2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);


if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="🚩 PLayer1 Wins!!";
}
if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="PLayer2 Wins!!🚩";
}
else if(randomNo1==randomNo2){
    document.querySelector("h1").innerHTML="Tie";
}