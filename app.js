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

/*
//Seksjon 2: Generer fiende

// Character HP
const characterHP = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getCharacterHP = characterHP(50, 151);

console.log(getCharacterHP);

// Character attack damage
const attackDamage = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
*/
