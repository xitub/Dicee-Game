console.log("Hello, It's working!");
console.log("hi");
function rolldice(){
var num1 = Math.ceil(Math.random() * 6);
var num2 = Math.ceil(Math.random() * 6);
if (num1 > num2)
    document.querySelector("h1").innerHTML = "🚩 player 1 wins!";
else if (num1 === num2)
    document.querySelector("h1").innerHTML = "Draw!";
else
    document.querySelector("h1").innerHTML = "player 2 wins! 🚩";

// Method 1 (creating an array and then modifying the image class with new image selected from the array)

const images = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

  const img1 = document.querySelector('.img1');
  img1.src = images[num1-1];
  img1.alt = "Player 1 dice shows "+num1;

  const img2 = document.querySelector('.img2');
  img2.src = images[num2-1];
  img2.alt = "Player 2 dice shows "+num2;    

// Method 2 (selecting the img element and using setAttribute method to change the source image)

/* document.querySelectorAll("img")[0].setAttribute("src","images/dice"+num1+".png")
 document.querySelectorAll("img")[1].setAttribute("src","images/dice"+num2+".png") */
}

// To show 'Refresh Me' first time the website gets loaded below code is written so when browser's refresh button is clicked it shows the winner not when the website is opened.
document.addEventListener('DOMContentLoaded', () => {
    let isReload = false;
    // Modern API
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      isReload = true;
    } 
    // Additional alternatives so If a browser doesn't support Modern API environment.
    
    // Fallback to deprecated API
    else if (performance.navigation && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      isReload = true;
    }
    // Alternate fallback using sessionStorage
    else if (sessionStorage.getItem('hasVisited')) {
      isReload = true;
    } 
    else {
      sessionStorage.setItem('hasVisited', 'true');
    }

    if (isReload) {
      rolldice();
    }
  });

  
