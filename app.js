//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage (Legge til event listener på hvert bilde?)

function createCharacter() {
  const characterName = document.getElementById("character-name").value;
  const characterHp = parseInt(document.getElementById("character-hp").value, 10);
  const attackDamage = parseInt(document.getElementById("attack-damage").value, 10);
  const profilePicture = document.querySelector(".profile-img");

  const character = {characterName, characterHp, attackDamage, profilePicture};

  console.log(character);

  localStorage.setItem("character", JSON.stringify(character));
}

document.getElementById("create-character").addEventListener("click", createCharacter);

//Seksjon 2: Generer fiende

function enemyCreator() {
  const enemies = [
    {name: "Dragon", img: "assets/dragon.jpg", hp: 100, attack: 30},
    {name: "Monster", img: "assets/monster.jpg", hp: 80, attack: 25},
    {name: "Swamp Monster", img: "assets/swamp-monster.jpg", hp: 50, attack: 20},
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
}

document.getElementById("enemy-creator").addEventListener("click", enemyCreator);
