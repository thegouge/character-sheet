// import lists of stuff
import Character from "../Character.js";
import initializePage from "./initPage.js";

// Creation of the Ability Score Object

export let character = new Character();

export function save() {
  console.log(`saving ${character.charName}`);

  localStorage.setItem("D&D-" + character.charName, JSON.stringify(character));

  const characterDiv = document.querySelector("#saved-char-list");

  characterDiv.innerHTML += `<li class="character" id="${character.charName}">${character.charName}</li> <span class="delchar" id="${character.charName}-del">X</span>`;

  document
    .querySelector(`#${character.charName}`)
    .addEventListener("click", () => {
      load(character.charName);
    });

  document
    .querySelector(`#${character.charName}-del`)
    .addEventListener("click", () => {
      deleteCharacter(character.charName);
    });

  updatePage();
}

function load(name) {
  console.log(`loading up ${name}`);

  character = new Character(JSON.parse(localStorage.getItem("D&D-" + name)));

  console.log(character);

  updatePage();
}

function deleteCharacter(name) {
  console.log(`deleting ${name}`);

  localStorage.removeItem("D&D-" + name);

  updatePage();
}

function updatePage() {
  console.log("updating page...");

  // Update Character Load modal
  const charList = document.querySelector("#saved-char-list");

  if (charList.children.length > 0) {
    document.querySelector("#no-chars").setAttribute("style", "display: none;");

    const newCharList = document.querySelector("#saved-char-list");
  } else {
    document
      .querySelector("#no-chars")
      .setAttribute("style", "display: block;");
  }

  // Update character.charName
  document.querySelector("#char-name").value = character.charName;

  // Update Ability scores
  const scoreBoxes = [...document.getElementsByClassName("ap-display")];
  for (let score of scoreBoxes) {
    const apScore = score.children[0];
    const modifier = score.children[1];
    apScore.value = character.stats[apScore.id].abilityScore;
    modifier.innerHTML = character.stats[apScore.id].mod;
  }

  // Update Proficiency Bonus
  document.querySelector("#pro-bonus").innerHTML = `+${character.proBonus}`;

  // Update Passive Perception
  let proficiencyBonus =
    character.pros.filter((skill) => skill.name === "Perception").length > 0
      ? character.proBonus
      : 0;
  document.querySelector("#pasPer").innerHTML =
    10 + character.stats.wis.mod + proficiencyBonus;

  // Update AC
  document.querySelector("#ac").value = 10 + character.stats.dex.mod;

  // Update Initiative
  document.querySelector("#initiative").innerHTML = character.stats.dex.mod;

  // Update Hit Dice
  document.querySelector("#hit-type").innerHTML = `1d${character.hitType}`;
  document.querySelector("#hit-dice").value = character.level;
  document.querySelector("#max-hp").value = character.calcMaxHP();
  document.querySelector("#hp").value = character.HP;
}

initializePage(character);
updatePage();
