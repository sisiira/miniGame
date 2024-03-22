let xp = 0;
let level = 1;
let health = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["wooden sword"];
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const levelText = document.querySelector("#levelText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
{
    name: "store",  
    description: "Welcome to the store!",
    "button text": ["Go to store", "Go to cave", "Fight the dragon"],
}
]

function goStore() {
  button1.innerHTML = "go to the store";
  button2.innerHTML = "go to the cave";
  button3.innerHTML = "fight the dragon";

  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;

  text.innerHTML = "Welcome to the store!";
}

function goStore() {
  button1.innerHTML = "Buy health";
  button2.innerHTML = "Buy weapon";
  button3.innerHTML = "Leave store";

  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = leaveStore;

  text.innerHTML = "Welcome to the store!";
}
function goCave() {
  console.log("Going to the cave");
}
function fightDragon() {
  console.log("Fighting the dragon");
}

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {

}

function buyHealth() {
  console.log("Buying health");
}

function buyWeapon() {
  console.log("Buying weapon");
}

function leaveStore() {
  console.log("Leaving store");
}
