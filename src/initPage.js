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
  const classList = document.querySelector("#class-list");
  const backgroundList = document.querySelector("#background-list");
  const raceList = document.querySelector("#race-list");
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
  document.querySelector("#classes").addEventListener("change", () => {
    character.classBonus(document.querySelector("#classes").value);
  });
  document.querySelector("#races").addEventListener("change", () => {
    character.chooseRace(document.querySelector("#races").value);
  });
  document.querySelector("#backgrounds").addEventListener("change", () => {
    character.chooseBackground(document.querySelector("#backgrounds").value);
  });
  document.querySelector("#save-btn").addEventListener("click", () => {
    save();
  });
  document.querySelector("#update-btn").addEventListener("click", () => {
    character.updateStats();
  });
  document.querySelector("#ap-btn").addEventListener("click", () => {
    openAPRoller();
  });
  document.querySelector("#level-btn").addEventListener("click", () => {
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
      ? document.querySelector("#saving-throws").appendChild(listItem)
      : document.querySelector("#skills").appendChild(listItem);
  });
}
