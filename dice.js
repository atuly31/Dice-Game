var randomNumber1 = Math.floor(Math.random()*6)+1;

var randonImage = "./images/"+"dice"+ randomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randonImage);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randonImage2 = "./images/"+"dice"+ randomNumber2+".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randonImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Draw";
}
