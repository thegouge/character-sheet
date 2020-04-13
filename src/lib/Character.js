import {skills} from "../data/skills.js";
import {races} from "../data/races.js";
import {classes} from "../data/classes.js";
import {backgrounds} from "../data/backgrounds.js";

import {pickSkillProficiencies} from "./modals.js";

export default class Character {
  constructor(
    options = {
      charName: "Default Name",
      characterClass: "",
      characterRace: "",
      characterBackground: "",
      alignment: "",
      exp: 0,
      playerName: "",
      level: 1,
      hitType: 8,
      HP: 7,
      pros: [],
      otherPro: "",
      spells: "",
      equip: "",
      traits: "",
      stats: {
        str: new Stat("str"),
        dex: new Stat("dex"),
        con: new Stat("con"),
        int: new Stat("int"),
        wis: new Stat("wis"),
        cha: new Stat("cha"),
      },
    }
  ) {
    this.charName = options.charName;
    this.characterClass = options.characterClass;
    this.characterRace = options.characterRace;
    this.characterBackground = options.characterBackground;
    this.alignment = options.alignment;
    this.exp = options.exp;
    this.playerName = options.playerName;
    this.level = options.level;
    this.hitDice = options.level;
    this.hitType = options.hitType;
    this.pros = options.pros;
    this.otherPro = options.otherPro;
    this.spells = options.spells;
    this.equip = options.equip;
    this.traits = options.traits;
    this.stats = options.stats;
    this.setProBonus();
    this.HP = this.calcMaxHP();
  }

  calcMaxHP() {
    const baseHP = this.hitType + this.stats.con.mod;
    let extraHP = 0;
    for (let i = 1; i < this.level; i++) {
      extraHP += this.hitType / 2 + 1;
    }

    return baseHP + extraHP;
  }

  setProBonus() {
    let bonus = 2;
    switch (this.level) {
      case 5 || 6 || 7 || 8:
        bonus = 3;
        break;

      case 9 || 10 || 11:
        bonus = 4;
        break;

      case 12 || 13 || 14 || 15:
        bonus = 5;
        break;

      case 16 || 17 || 18 || 19 || 20:
        bonus = 6;
        break;

      default:
        bonus = 2;
        break;
    }

    this.proBonus = bonus;
  }

  addSkillPro(skillName) {
    const checkedSkill = skills.find((skill) => skill.id === skillName);
    this.pros.push(checkedSkill);

    this.calcSkillModifier(skillName);
  }

  calcSkillModifier(skillName) {
    const skill = skills.find((skill) => skill.id === skillName);
    let modifier = this.pros.find((skill) => skill.id === skillName)
      ? this.proBonus
      : 0;

    modifier += this.stats[skill.stat].mod;

    document.querySelector(`#${skillName}-mod`).innerHTML = modifier;
  }

  levelUp() {
    console.log(`${this.charName} is leveling up!`);

    if (this.level === 20) {
      alert("You're Already Max Level!");
    } else {
      this.level++;
      document.querySelector("#char-level").value = this.level;
      this.setProBonus();
    }

    // Make the Ability Point Generation button go away
    document.querySelector("#ap").style.display = "none";
  }

  classBonus(className) {
    // characterializes class selection from json
    const chosenClass = classes.find((item) => {
      return item.name == className;
    });

    pickSkillProficiencies(
      chosenClass.skills.number,
      chosenClass.skills.choice
    );

    // Update elements based on json info
    this.hitType = chosenClass.hitDice;
    this.HP = this.calcMaxHP();
    chosenClass.throws.forEach((save) => {
      document.querySelector(`#${save.id}`).checked = true;
      this.pros.push(save);
    });
    this.otherPro += chosenClass.proficiencies;
    this.spells += chosenClass.altAttacks;
    this.equip += chosenClass.equipment;
    this.traits += chosenClass.other;

    this.updateStats();
  }

  chooseRace(r) {
    // characterialize race choice from json
    const race = races.find((item) => {
      return item.name == r;
    });

    // Set each element to an easier to read variable
    const bonuses = race.stats;
    const otherPro = document.querySelector("#otherPro");
    const traits = document.querySelector("#traits");

    // Update elements based on json info
    for (let i = 0; i < bonuses.length; i++) {
      document.querySelector(`#${bonuses[i].name}`).value =
        parseInt(document.querySelector(race.stats[i].name).value) +
        race.stats[i].bonus;
    }
    document.querySelector("#speed").innerHTML = race.speed;
    otherPro.innerHTML += race.languages;
    traits.innerHTML += race.other;

    // Update the rest of the page
    this.updateStats();
  }

  chooseBackground(b) {
    // characterialize background selection from json
    const background = backgrounds.find((item) => {
      return item.name == b;
    });

    // Set each element to an easier to read constiable
    const otherPro = document.querySelector("#otherPro");
    const traits = document.querySelector("#traits");
    const equip = document.querySelector("#equip");
    const gold = document.querySelector("#gold");

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
      background.skills.forEach(function (element) {
        document.querySelector(`#${element.id}`).checked = true;
      });
    }
    // Update elements based on json info
    gold.value = String(parseInt(gold.value + background.gold));
    otherPro.innerHTML += background.pros;
    equip.innerHTML += background.equip;
    traits.innerHTML += background.other;

    // Update the rest of the page
    this.updateStats();
  }

  updateStats() {
    console.log("updating character...");

    // Update Character Name
    this.charName = document.querySelector("#char-name").value;

    // Update Character Proficiency Bonus
    this.setProBonus();

    // Getting Ability Scores from the Document
    for (let stat in this.stats) {
      let statAsWritten = document.querySelector(`#${stat}`);
      let characterStat = this.stats[stat];

      characterStat.abilityScore = parseInt(statAsWritten.value);
      characterStat.modGen();
    }

    //Calculate Skill Modifiers
    skills.map((skill) => {
      if (document.querySelector(`#${skill.id}`).checked) {
        this.pros.push(skill);
      }
      this.calcSkillModifier(skill.id);
    });

    // Calculating initiative Mod
    document.querySelector("#initiative").innerHTML = this.stats.dex.mod;
  }
}

class Stat {
  constructor(name) {
    this.charName = name;
    this.abilityScore = 8;
    this.mod = -1;
  }
  setScore(newScore) {
    this.abilityScore = parseInt(newScore);
  }
  modGen() {
    this.mod = Math.floor((this.abilityScore - 10) / 2);
  }
}
