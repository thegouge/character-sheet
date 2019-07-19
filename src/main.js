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

// Parse Race Selection
function raceBonus(r) {
  // characterialize race choice from json
  const race = races.find((item) => {
    return item.name == r;
  });

  // Set each element to an easier to read variable
  const bonuses = race.stats;
  const otherPro = document.getElementById("otherPro");
  const traits = document.getElementById("traits");

  // Update elements based on json info
  for (let i = 0; i < bonuses.length; i++) {
    document.getElementById(bonuses[i].name).value =
      parseInt(document.getElementById(race.stats[i].name).value) +
      race.stats[i].bonus;
  }
  document.getElementById("speed").innerHTML = race.speed;
  otherPro.innerHTML += race.languages;
  traits.innerHTML += race.other;

  // Update the rest of the page
  character.updateStats();
}

// Parse Background Selection
function backgroundBonus(b) {
  // characterialize background selection from json
  const background = backgrounds.find((item) => {
    return item.name == b;
  });

  // Set each element to an easier to read constiable
  const otherPro = document.getElementById("otherPro");
  const traits = document.getElementById("traits");
  const equip = document.getElementById("equip");
  const gold = document.getElementById("gold");

  // Exception for 'Haunted' Background
  if (background.name == "Haunted") {
    pickSkillProficiencies(1, [
      {name: "Arcana", id: "arca"},
      {name: "Investigation", id: "inve"},
      {name: "Religion", id: "reli"},
      {name: "Survival", id: "surv"},
    ]);
  } else {
    // update skill proficiencies
    background.skills.forEach(function(element) {
      document.getElementById(element.id).checked = true;
    });
  }
  // Update elements based on json info
  gold.value = String(parseInt(gold.value + background.gold));
  otherPro.innerHTML += background.pros;
  equip.innerHTML += background.equip;
  traits.innerHTML += background.other;

  // Update the rest of the page
  character.updateStats();
}

initializePage(character);
updatePage();
