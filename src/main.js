// import lists of stuff
import Character from "./Character.js";
import initializePage from "./initPage.js";

// Creation of the Ability Score Object

export const character = new Character();

function updatePage() {
  console.log("updating page...");

  // Update Ability scores
  const scoreBoxes = [...document.getElementsByClassName("ap-display")];
  for (let score of scoreBoxes) {
    const apScore = score.children[0];
    const modifier = score.children[1];
    apScore.value = character.stats[apScore.id].abilityScore;
    modifier.innerHTML = character.stats[apScore.id].mod;
  }

  // Update Proficiency Bonus
  document.getElementById("pro-bonus").innerHTML = `+${character.proBonus}`;

  // Update Passive Perception
  let proficiencyBonus =
    character.pros.filter((skill) => skill.name === "Perception").length > 0
      ? character.proBonus
      : 0;
  document.getElementById("pasPer").innerHTML =
    10 + character.stats.wis.mod + proficiencyBonus;

  // Update AC
  document.getElementById("ac").value = 10 + character.stats.dex.mod;

  // Update Initiative
  document.getElementById("initiative").innerHTML = character.stats.dex.mod;

  // Update Hit Dice
  document.getElementById("hit-type").innerHTML = `1d${character.hitType}`;
  document.getElementById("hit-dice").value = character.level;
  document.getElementById("max-hp").value = character.calcMaxHP();
  document.getElementById("hp").value = character.HP;
}

initializePage(character);
updatePage();
