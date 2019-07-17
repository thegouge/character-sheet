// import lists of stuff
import Character from "./Character.js";
import initializePage from "./initPage.js";

// Creation of the Ability Score Object

const character = new Character();

function updatePage() {
  character.updateStats();
  console.log("updating page...");
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
  character.updateStats();
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
  character.updateStats();
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

// Calculates Saving Throw and Skill Bonuses
// function addPro(name) {
//   const sta = skills.find((skill) => {
//     return skill.id === name;
//   }).stat;
//   let pro = document.getElementById("pro-bonus").innerHTML;
//   pro = parseInt(pro.replace("+", ""));

//   const box = document.getElementById(name);

//   let bon = character.stats[sta].mod;

//   if (box.checked == true) {
//     bon = bon + pro;
//     if (bon >= 0) {
//       bon = String(+bon);
//     } else {
//       bon = String(bon);
//     }
//   } else {
//     if (bon >= 0) {
//       bon = String(+bon);
//     } else {
//       bon = String(bon);
//     }
//   }
//   document.getElementById(name + "-mod").innerHTML = bon;
// }

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

initializePage(character);
