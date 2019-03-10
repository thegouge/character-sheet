// Fills out the DnD character sheet on the Page

import {skills} from "./data/skills.js";
import {races} from "./data/races.js";
import {classes} from "./data/classes.js";
import {backgrounds} from "./data/backgrounds.js";

// Creation of the Ability Score Object
class Stat {
  constructor(name, score) {
    this.name = name;
    this.abilityScore = score;
    this.mod = modGen(score);
  }
}

function modGen(score) {
  return Math.floor((score - 10) / 2);
}

let str, dex, con, int, wis, cha;

const characterStats = [
  (str = new Stat("str", document.getElementById("str").value)),
  (dex = new Stat("dex", document.getElementById("dex").value)),
  (con = new Stat("con", document.getElementById("con").value)),
  (int = new Stat("int", document.getElementById("int").value)),
  (wis = new Stat("wis", document.getElementById("wis").value)),
  (cha = new Stat("cha", document.getElementById("cha").value))
];

function rollAP() {
  const modal = document.getElementById("ap-modal");
  const close = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  close.onclick = function() {
    modal.style.display = "none";
    results = [];
  };

  const statLists = [
    document.getElementById("strength"),
    document.getElementById("dexterity"),
    document.getElementById("constitution"),
    document.getElementById("intelligence"),
    document.getElementById("wisdom"),
    document.getElementById("charisma")
  ];
  let results = [];

  for (const i = 0; i < characterStats.length; i++) {
    const num = [];
    while (num.length < 4) {
      num.push(Math.round(Math.random() * 6) + 1);
    }
    const index = num.indexOf(Math.min(...num));
    num.splice(index, 1);
    results.push(
      num.reduce((acc, curr) => {
        return acc + curr;
      })
    );
  }

  statLists.forEach((list) => {
    results.forEach((number) => {
      const item = document.createElement("option");
      item.setAttribute("value", number);
      item.setAttribute("class", "apList");
      list.appendChild(item);
    });

    const chosenIndexes = [];
    const name = list.getAttribute("name");
    const object = document.getElementById(name);
    object.addEventListener("change", function(event) {
      dynamicDropDown(object);
    });
  });

  const submit = document.getElementById("ap-submit");

  submit.onclick = function() {
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

    results = [];

    updateStats();
  };
}

function dynamicDropDown(object) {
  console.log("getting to it");
}

// Event Listeners
characterStats.forEach(function(stat) {
  document
    .getElementById(stat.name)
    .addEventListener("change", function(event) {
      updateStats();
    });
});

document.getElementById("classes").addEventListener("change", function() {
  classBonus(document.getElementById("classes").value);
});
document.getElementById("races").addEventListener("change", function() {
  raceBonus(document.getElementById("races").value);
});
document.getElementById("backgrounds").addEventListener("change", function() {
  backgroundBonus(document.getElementById("backgrounds").value);
});

// Parse Class Selection
// TODO: add a skill choosing popup
function classBonus(c) {
  // initializes class selection from json
  const cl = classes.find(function(item) {
    return item.name == c;
  });

  // Placeholder for skill choosing popup window
  const skillList = cl.skills.choice.map(function(option) {
    return option.name;
  });
  window.alert(
    `Choose ${cl.skills.number} of any of the following skills: ${skillList}`
  );

  // Set each element to an easier to read constiable
  const saves = cl.throws;
  const otherPro = document.getElementById("otherPro").innerHTML;
  const spells = document.getElementById("otherAtks").innerHTML;
  const equip = document.getElementById("equip").innerHTML;
  const traits = document.getElementById("traits").innerHTML;

  // Update elements based on json info
  document.getElementById("hit-type").innerHTML = cl.hitDice;
  document.getElementById("max-hp").value = cl.hp + con.mod;
  document.getElementById("hp").value = cl.hp + con.mod;
  cl.throws.forEach((item) => {
    document.getElementById(item.id).checked = true;
  });
  otherPro = otherPro + cl.proficiencies;
  spells = spells + cl.altAttacks;
  equip = equip + cl.equipment;
  traits = traits + cl.other;

  // Apply updated info to DOM
  document.getElementById("otherPro").innerHTML = otherPro;
  document.getElementById("otherAtks").innerHTML = spells;
  document.getElementById("equip").innerHTML = equip;
  document.getElementById("traits").innerHTML = traits;

  // Update the rest of the page
  updateStats();
}

// Parse Race Selection
function raceBonus(r) {
  // initialize race choice from json
  const race = races.find(function(item) {
    return item.name == r;
  });

  // Set each element to an easier to read constiable
  const bonuses = race.characterStats;
  const otherPro = document.getElementById("otherPro").innerHTML;
  const traits = document.getElementById("traits").innerHTML;

  // Update elements based on json info
  for (const i = 0; i < bonuses.length; i++) {
    document.getElementById(bonuses[i].name).value =
      parseInt(document.getElementById(race.characterStats[i].name).value) +
      race.characterStats[i].bonus;
  }
  document.getElementById("speed").innerHTML = race.speed;
  otherPro = otherPro + race.languages;
  traits = traits + race.other;

  // Apply Updated info to DOM
  document.getElementById("otherPro").innerHTML = otherPro;
  document.getElementById("traits").innerHTML = traits;

  // Update the rest of the page
  updateStats();
}

// Parse Background Selection
function backgroundBonus(b) {
  // initialize background selection from json
  const background = backgrounds.find(function(item) {
    return item.name == b;
  });

  // Set each element to an easier to read constiable
  const otherPro = document.getElementById("otherPro").innerHTML;
  const traits = document.getElementById("traits").innerHTML;
  const equip = document.getElementById("equip").innerHTML;
  const gold = document.getElementById("gold").value;

  // Exception for 'Haunted' Background
  if (background.name == "Haunted") {
    window.alert(`Choose one:
                Arcana
                Investigation
                Religion
                Survival`);
  } else {
    // update skill proficiencies
    background.skills.forEach(function(element) {
      document.getElementById(element.id).checked = true;
    });
  }
  // Update elements based on json info
  gold = String(parseInt(gold + background.gold));
  otherPro = otherPro + background.pros;
  equip = equip + background.equip;
  traits = traits + background.other;

  // Apply Updates to DOM
  document.getElementById("otherPro").innerHTML = otherPro;
  document.getElementById("traits").innerHTML = traits;
  document.getElementById("equip").innerHTML = equip;
  document.getElementById("gold").value = gold;

  // Update the rest of the page
  updateStats();
}

// Calculates Saving Throw and Skill Bonuses
function addPro(nam, sta) {
  let pro = document.getElementById("pro-bonus").innerHTML;
  pro = parseInt(pro.replace("+", ""));

  const box = document.getElementById(nam);

  sta = sta + ".mod";
  let bon = eval(sta);

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
  // Calls Proficiency updating funciton
  proficiencyChecker(document.getElementById("char-level").value);

  // Calcualte Ability Modifiers
  characterStats.forEach(function(s) {
    s.abilityScore = document.getElementById(s.name).value;
    s.mod = modGen(s.abilityScore);
    document.getElementById(s.name + "Mod").innerHTML = s.mod;
  });

  // Calculate Saving Throw Modifiers
  skills.savingThrows.map(function(save) {
    addPro(save.id, save.stat);
  });

  //Calculate Skill Modifiers
  skills.skills.map(function(skill) {
    addPro(skill.id, skill.stat);
  });

  // Calculating initiative Mod
  document.getElementById("initiative").innerHTML = characterStats[1].mod;

  // Calculate Passive Perception
  let pro;
  const perception = document.getElementById("perc");
  if (perc.checked == true) {
    pro = document.getElementById("pro-bonus").innerHTML;
    pro = parseInt(pro.replace("+", ""));
  } else {
    pro = 0;
  }
  document.getElementById("pasPer").innerHTML = 10 + wis.mod + pro;
}

// Initialization of Page Values
updateStats();
