import {skills} from "./data/skills.js";
import {races} from "./data/races.js";
import {classes} from "./data/classes.js";
import {backgrounds} from "./data/backgrounds.js";

import {openAPRoller} from "./modals.js";

import {save} from "./main.js";

function createListItem(value) {
  return `<option value=${value} />`;
}

export default function initializePage(character) {
  const classList = document.getElementById("class-list");
  const backgroundList = document.getElementById("background-list");
  const raceList = document.getElementById("race-list");
  const AbilityScores = [...document.getElementsByClassName("stat")];

  // Populate Class List
  classes.forEach((playerClass) => {
    classList.innerHTML += createListItem(playerClass.name);
  });

  // Populate Backround List
  backgrounds.forEach((background) => {
    backgroundList.innerHTML += createListItem(background.name);
  });

  //Populate Race List
  races.forEach((race) => {
    raceList.innerHTML += createListItem(race.name);
  });

  // Event Listeners
  document.getElementById("classes").addEventListener("change", () => {
    character.classBonus(document.getElementById("classes").value);
  });
  document.getElementById("races").addEventListener("change", () => {
    character.chooseRace(document.getElementById("races").value);
  });
  document.getElementById("backgrounds").addEventListener("change", () => {
    character.chooseBackground(document.getElementById("backgrounds").value);
  });
  document.getElementById("save-btn").addEventListener("click", () => {
    save();
  });
  document.getElementById("update-btn").addEventListener("click", () => {
    character.updateStats();
  });
  document.getElementById("ap-btn").addEventListener("click", () => {
    openAPRoller();
  });
  document.getElementById("level-btn").addEventListener("click", () => {
    character.levelUp();
  });

  //creating Skill checkboxes and modifiers
  skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "skill-li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "skill");
    input.setAttribute("id", skill.id);

    input.addEventListener("click", () => {
      character.addSkillPro(skill.id);
    });

    const skillModifier = document.createElement("p");
    skillModifier.setAttribute("class", "skillMod");
    skillModifier.setAttribute("id", skill.id + "-mod");
    skillModifier.innerHTML = character.stats[skill.stat].mod;

    listItem.appendChild(input);
    listItem.appendChild(skillModifier);
    skill.id.length > 4
      ? document.getElementById("saving-throws").appendChild(listItem)
      : document.getElementById("skills").appendChild(listItem);
  });
}
