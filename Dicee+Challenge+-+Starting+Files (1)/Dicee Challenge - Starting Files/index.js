var randomNumber1=6;
console.log("reached inside");
// Generates a random integer between min (inclusive) and max (inclusive).
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum=getRandomInt(1,randomNumber1);
const randomNum2=getRandomInt(1,randomNumber1);
document.querySelector('.img1').src='./images/dice'+randomNum+'.png';
document.querySelector('.img2').src='./images/dice'+randomNum2+'.png';
if(randomNum>randomNum2)
{
    document.querySelectorAll('h1')[0].textContent = "Player1 wins 🚩";

}
else if(randomNum<randomNum2)
{
    document.querySelectorAll('h1')[0].textContent = "🚩 Player2 wins";
}
else
{
    document.querySelectorAll('h1')[0].textContent = "Draw";
}