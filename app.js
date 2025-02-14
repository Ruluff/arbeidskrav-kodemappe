//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage (Legge til event listener på hvert bilde?)

let selectedProfilePicture = 0; // lagt til 0 for å velge en karakter uansett

const profilePicture = Array.from(document.getElementsByClassName("profile-img"));
profilePicture.forEach(function (image, index) {
  image.addEventListener("click", function () {
    selectedProfilePicture = index;
  });
});

function createCharacter() {
  const characterName = document.getElementById("character-name").value;
  const characterHp = parseInt(document.getElementById("character-hp").value, 10);
  const attackDamage = parseInt(document.getElementById("attack-damage").value, 10);

  const character = {characterName, characterHp, attackDamage, profilePicture: selectedProfilePicture};

  console.log(profilePicture);
  console.log(character);

  localStorage.setItem("character", JSON.stringify(character));
}

document.getElementById("create-character").addEventListener("click", createCharacter);

//Seksjon 2: Genrer fiende

function enemyCreator() {
  const enemies = [
    {name: "Dragon", img: "assets/dragon.jpg", hp: 150, attack: 50},
    {name: "Orc", img: "assets/monster.jpg", hp: 80, attack: 20},
    {name: "Swamp Monster", img: "assets/swamp-monster.jpg", hp: 120, attack: 40},
  ];

  const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];

  const enemyImg = document.getElementById("enemy-img");
  enemyImg.src = randomEnemy.img;

  const enemyName = document.getElementById("enemy-name");
  enemyName.innerHTML = randomEnemy.name;

  const enemyHp = document.getElementById("enemy-hp");
  enemyHp.innerHTML = randomEnemy.hp;

  const enemyAttack = document.getElementById("enemy-attack");
  enemyAttack.innerHTML = randomEnemy.attack;

  console.log(enemies);
  console.log(randomEnemy);

  localStorage.setItem("randomEnemy", JSON.stringify(randomEnemy));
}

document.getElementById("enemy-creator").addEventListener("click", enemyCreator);

// Seksjon 3: Sloss

// Slosskamp insp: https://github.com/ZakSchenck/pokemon-game/blob/main/app.js

function battle(charHp, charAttack, enemyHp, enemyAttack) {
  const remainingCharHp = charHp - enemyAttack;
  const remainingEnemyHp = enemyHp - charAttack;

  if (remainingCharHp === remainingEnemyHp) {
    return "Uavgjort";
  } else if (remainingCharHp > remainingEnemyHp) {
    return "Du vant!";
  } else {
    return "Du tapte!";
  }
}

function chooseWinner() {
  const createdCharacter = JSON.parse(localStorage.getItem("character"));
  const createdEnemy = JSON.parse(localStorage.getItem("randomEnemy"));
  const resultMessage = battle(
    createdCharacter.characterHp,
    createdCharacter.attackDamage,
    createdEnemy.hp,
    createdEnemy.attack
  );
  document.getElementById("battle-result").innerHTML = resultMessage;
}

function startFight() {
  const createdCharacter = JSON.parse(localStorage.getItem("character"));
  const createdEnemy = JSON.parse(localStorage.getItem("randomEnemy"));

  chooseWinner(createdCharacter.characterHp, createdEnemy.hp);

  const battleArea = document.getElementById("battle-area");

  chooseWinner();

  // Display

  const imageArray = ["assets/death-knight.jpeg", "assets/hunter.jpg", "assets/mage.webp"];

  const characterDisplay = document.createElement("div");
  characterDisplay.id = "character-display";
  characterDisplay.className = "profile-card";

  const charHeading = document.createElement("h2");
  charHeading.textContent = "Helten";
  characterDisplay.appendChild(charHeading);

  const charImg = document.createElement("img");
  charImg.id = "char-img";
  charImg.src = imageArray[createdCharacter.profilePicture];
  characterDisplay.appendChild(charImg);

  const charName = document.createElement("p");
  charName.id = "char-name";
  charName.textContent = createdCharacter.characterName;
  characterDisplay.appendChild(charName);

  const charHp = document.createElement("p");
  charHp.id = "char-hp";
  charHp.textContent = createdCharacter.characterHp;
  characterDisplay.appendChild(charHp);

  const charAttack = document.createElement("p");
  charAttack.id = "char-attack";
  charAttack.textContent = createdCharacter.attackDamage;
  characterDisplay.appendChild(charAttack);

  // enemy display

  const enemyFightDisplay = document.createElement("div");
  enemyFightDisplay.id = "enemy-fight-display";
  enemyFightDisplay.className = "profile-card";

  const enemyHeading = document.createElement("h2");
  enemyHeading.textContent = "Fienden";
  enemyFightDisplay.appendChild(enemyHeading);

  const enemyFightImg = document.createElement("img");
  enemyFightImg.id = "enemy-fight-img";
  enemyFightImg.src = createdEnemy.img;
  enemyFightDisplay.appendChild(enemyFightImg);

  const enemyFightName = document.createElement("p");
  enemyFightName.id = "enemy-fight-name";
  enemyFightName.textContent = createdEnemy.name;
  enemyFightDisplay.appendChild(enemyFightName);

  const enemyFightHp = document.createElement("p");
  enemyFightHp.id = "enemy-fight-hp";
  enemyFightHp.textContent = createdEnemy.hp;
  enemyFightDisplay.appendChild(enemyFightHp);

  const enemyFightAttack = document.createElement("p");
  enemyFightAttack.id = "enemy-fight-attack";
  enemyFightAttack.textContent = createdEnemy.attack;
  enemyFightDisplay.appendChild(enemyFightAttack);

  battleArea.appendChild(characterDisplay);
  battleArea.appendChild(enemyFightDisplay);

  console.log(startFight);
}

document.getElementById("start-fight").addEventListener("click", startFight);

// resultat

// function chooseWinner(subtract) {
