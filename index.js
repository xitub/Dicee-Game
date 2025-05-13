function rolldice() {
  var num1 = Math.ceil(Math.random() * 6);
  var num2 = Math.ceil(Math.random() * 6);
  if (num1 > num2) document.querySelector("h1").innerHTML = "🚩 player 1 wins!";
  else if (num1 === num2) document.querySelector("h1").innerHTML = "Draw!";
  else document.querySelector("h1").innerHTML = "player 2 wins! 🚩";

  document
    .querySelectorAll("img")[0]
    .setAttribute("src", "images/dice" + num1 + ".png");
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", "images/dice" + num2 + ".png");
}

document.addEventListener("DOMContentLoaded", () => {
  let isReload = false;
  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    isReload = true;
  } else if (
    performance.navigation &&
    performance.navigation.type === performance.navigation.TYPE_RELOAD
  ) {
    isReload = true;
  } else if (sessionStorage.getItem("hasVisited")) {
    isReload = true;
  } else {
    sessionStorage.setItem("hasVisited", "true");
  }

  if (isReload) {
    rolldice();
  }
});
