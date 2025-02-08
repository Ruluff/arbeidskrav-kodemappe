//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage

const characterCreator = getElementById("character-creator");

function characterCreator() {
document.getElementById("profile-img").src = "assets/death-knight.jpeg";
document.getElementById("character-name").innerHTML = "test";
}

document.getElementById("character-button").addEventListener("click", characterCreator);


/*

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

const getAttackDamage = attackDamage(10, 51);

console.log(getAttackDamage);

// Create Character

function createNewCharacter() {
  const createCharacter = getElementByID("create-character");
}

console.log(createNewCharacter);

//Seksjon 2: Generer fiende

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
