// import lists of stuff
import Character from "./Character.js";
import {skills} from "./data/skills.js";
import {races} from "./data/races.js";
import {classes} from "./data/classes.js";
import {backgrounds} from "./data/backgrounds.js";

// Creation of the Ability Score Object

const character = new Character();

function initializePage() {
  const classList = document.getElementById("class-list");
  const backgroundList = document.getElementById("background-list");
  const raceList = document.getElementById("race-list");

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
    classBonus(document.getElementById("classes").value);
  });
  document.getElementById("races").addEventListener("change", () => {
    raceBonus(document.getElementById("races").value);
  });
  document.getElementById("backgrounds").addEventListener("change", () => {
    backgroundBonus(document.getElementById("backgrounds").value);
  });
  document.getElementById("update-btn").addEventListener("click", () => {
    updateStats();
  });
  document.getElementById("ap-btn").addEventListener("click", () => {
    openAPRoller();
  });
  document.getElementById("level-btn").addEventListener("click", () => {
    levelUp();
  });

  //creating Saving Throw checkboxes and modifiers
  skills.savingThrows.forEach((sThrow) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "st-li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "savingThrow");
    input.setAttribute("id", sThrow.id);

    input.addEventListener("click", () => {
      addPro(sThrow.id, "savingThrows");
    });

    const stOutput = document.createElement("p");
    stOutput.setAttribute("class", "stMod");
    stOutput.setAttribute("id", sThrow.id + "-mod");

    listItem.appendChild(input);
    listItem.appendChild(stOutput);
    document.getElementById("saving-throws").appendChild(listItem);
  });

  //creating Skill checkboxes and modifiers
  skills.skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "skill-li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "skill");
    input.setAttribute("id", skill.id);

    input.addEventListener("click", () => {
      addPro(skill.id, "skills");
    });

    const stOutput = document.createElement("p");
    stOutput.setAttribute("class", "skillMod");
    stOutput.setAttribute("id", skill.id + "-mod");

    listItem.appendChild(input);
    listItem.appendChild(stOutput);
    document.getElementById("skills").appendChild(listItem);
  });

  updateStats();
}

function createListItem(value) {
  return `<option value=${value} />`;
}

function openAPRoller() {
  console.log("Opening AP roller...");
  const modal = document.getElementById("ap-modal");
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
    closeModal("ap-modal");
  });

  modal.style.display = "block";

  let results = rollAP();

  const statLists = [
    document.getElementById("strengthList"),
    document.getElementById("dexterityList"),
    document.getElementById("constitutionList"),
    document.getElementById("intelligenceList"),
    document.getElementById("wisdomList"),
    document.getElementById("charismaList"),
  ];

  statLists.forEach((list) => {
    list.addEventListener("change", () => {
      rePopulateAPs(list, results);
    });

    results.forEach((number) => {
      const item = document.createElement("option");
      item.setAttribute("value", number);
      item.text = number;
      list.add(item);
    });
  });

  document.getElementById("ap-submit").onclick = () => {
    modal.style.display = "none";
    document.getElementById("str").value = document.getElementById(
      "strengthList"
    ).value;
    document.getElementById("dex").value = document.getElementById(
      "dexterityList"
    ).value;
    document.getElementById("con").value = document.getElementById(
      "constitutionList"
    ).value;
    document.getElementById("int").value = document.getElementById(
      "intelligenceList"
    ).value;
    document.getElementById("wis").value = document.getElementById(
      "wisdomList"
    ).value;
    document.getElementById("cha").value = document.getElementById(
      "charismaList"
    ).value;

    updateStats();
  };
}

function rePopulateAPs(selectedList, scoreList) {
  const otherLists = [...document.getElementsByClassName("ap-list")].filter(
    (element) => element !== selectedList && !element.value
  );
  const selectedIndex = scoreList.indexOf(parseInt(selectedList.value));
  scoreList.splice(selectedIndex, 1);

  for (let i in otherLists) {
    let currentList = otherLists[i];
    currentList.innerHTML = "<option value=''>Choose!</option>";
    scoreList.forEach((score) => {
      const item = document.createElement("option");
      item.setAttribute("value", score);
      item.text = score;
      currentList.add(item);
    });
  }
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function rollAP() {
  const results = [];
  for (let i = 0; i < 6; i++) {
    const num = [
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
    ];
    num.splice(num.indexOf(Math.min(...num)), 1);
    results.push(num.reduce((acc, curr) => acc + curr));
  }

  return results;
}

// Parse Class Selection
// TODO: add a skill choosing popup
function classBonus(c) {
  // characterializes class selection from json
  const cl = classes.find(function(item) {
    return item.name == c;
  });

  // Placeholder for skill choosing popup window
  const skillList = cl.skills.choice.map(function(option) {
    return option.name;
  });

  pickSkillProficiencies(cl.skills.number, cl.skills.choice);

  // Set each element to an easier to read constiable
  const saves = cl.throws;
  const otherPro = document.getElementById("otherPro");
  const spells = document.getElementById("otherAtks");
  const equip = document.getElementById("equip");
  const traits = document.getElementById("traits");

  // Update elements based on json info
  document.getElementById("hit-type").innerHTML = cl.hitDice;
  document.getElementById("max-hp").value = cl.hp + con.mod;
  document.getElementById("hp").value = cl.hp + con.mod;
  cl.throws.forEach((item) => {
    document.getElementById(item.id).checked = true;
  });
  otherPro.innerHTML += cl.proficiencies;
  spells.innerHTML += cl.altAttacks;
  equip.innerHTML += cl.equipment;
  traits.innerHTML += cl.other;

  // Update the rest of the page
  updateStats();
}

function pickSkillProficiencies(numberOfSkills, listOfSkills) {
  const modal = document.getElementById("skill-modal");
  modal.style.display = "block";
  document.getElementsByClassName("close")[1].addEventListener("click", (e) => {
    closeModal("skill-modal");
  });

  const header = document.getElementById("skill-pick-header");
  header.innerHTML = `Choose ${numberOfSkills} Skills`;

  const pageList = document.getElementById("skill-sub-list");

  const updateSubSkills = (id) => {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
      --numberOfSkills;
      header.innerHTML = `Choose ${numberOfSkills} Skills`;
    } else {
      ++numberOfSkills;
      header.innerHTML = `Choose ${numberOfSkills} Skills`;
    }
    if (numberOfSkills === 0) {
      document.getElementById("skill-submit").style.display = "block";
    } else {
      document.getElementById("skill-submit").style.display = "none";
    }
  };

  for (let index in listOfSkills) {
    const currentSkill = listOfSkills[index];

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "sub-box");
    checkBox.setAttribute("id", "sub-" + currentSkill.id);
    checkBox.addEventListener("click", (e) => {
      updateSubSkills("sub-" + currentSkill.id);
    });

    const li = document.createElement("li");
    li.setAttribute("class", "sub-skill");
    li.innerHTML = currentSkill.name + ": ";
    li.appendChild(checkBox);

    pageList.appendChild(li);
  }

  document.getElementById("skill-submit").addEventListener("click", () => {
    submitSkillModal(pageList.children);
  });
}

function submitSkillModal(list) {
  document.getElementById("skill-modal").style.display = "none";
  for (let skill of list) {
    const box = skill.children[0];
    let id = box.id.substring(4);
    if (box.checked) {
      document.getElementById(id).checked = true;
    }
  }
  updateStats();
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
  updateStats();
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
  updateStats();
}

// Calculates Saving Throw and Skill Bonuses
function addPro(nam, type) {
  const sta = skills[type].find((skill) => {
    return skill.id === nam;
  }).stat;
  let pro = document.getElementById("pro-bonus").innerHTML;
  pro = parseInt(pro.replace("+", ""));

  const box = document.getElementById(nam);

  let bon = character.stats[sta].mod;

  if (box.checked == true) {
    bon = bon + pro;
    if (bon >= 0) {
      bon = String(+bon);
    } else {
      bon = String(bon);
    }
  } else {
    if (bon >= 0) {
      bon = String(+bon);
    } else {
      bon = String(bon);
    }
  }
  document.getElementById(nam + "-mod").innerHTML = bon;
}

// Level up function
function levelUp() {
  x = parseInt(document.getElementById("char-level").value);
  if (x != 20) {
    x++;
    document.getElementById("char-level").value = x;
    proficiencyChecker(document.getElementById("char-level").value);
  } else if (x == 20) {
    alert("You're Already Max Level!");
  }

  // Make the Ability Point Generation button go away
  document.getElementById("ap").style.display = "none";
}

// Updates Proficiency bonus based on character level
function proficiencyChecker(lvl) {
  if (lvl < 5) {
    document.getElementById("pro-bonus").innerHTML = "+2";
  } else if (lvl >= 5 && lvl < 9) {
    document.getElementById("pro-bonus").innerHTML = "+3";
  } else if (lvl >= 9 && lvl < 12) {
    document.getElementById("pro-bonus").innerHTML = "+4";
  } else if (lvl >= 12 && lvl < 16) {
    document.getElementById("pro-bonus").innerHTML = "+5";
  } else if (lvl >= 16 && lvl <= 20) {
    document.getElementById("pro-bonus").innerHTML = "+6";
  }
}

// function that updates page calculations
function updateStats() {
  console.log("updating stats...");
  // Calls Proficiency updating funciton
  proficiencyChecker(document.getElementById("char-level").value);

  // Calcualte Ability Modifiers
  // console.log({...character.stats});
  for (let s in character.stats) {
    let characterStat = character.stats[s];
    characterStat.setScore(document.getElementById(characterStat.name).value);
    characterStat.modGen(characterStat.abilityScore);
    document.getElementById(characterStat.name + "Mod").innerHTML =
      characterStat.mod;
  }
  // Calculate Saving Throw Modifiers
  skills.savingThrows.map(function(save) {
    addPro(save.id, "savingThrows");
  });

  //Calculate Skill Modifiers
  skills.skills.map(function(skill) {
    addPro(skill.id, "skills");
  });

  // Calculating initiative Mod
  document.getElementById("initiative").innerHTML = character.stats.dex.mod;

  // Calculate Passive Perception
  let pro;
  if (document.getElementById("perc").checked == true) {
    pro = document.getElementById("pro-bonus").innerHTML;
    pro = parseInt(pro.replace("+", ""));
  } else {
    pro = 0;
  }
  document.getElementById("pasPer").innerHTML =
    10 + character.stats.wis.mod + pro;
}

initializePage();
