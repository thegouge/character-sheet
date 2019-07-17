import {skills} from "./data/skills.js";
import {races} from "./data/races.js";
import {classes} from "./data/classes.js";
import {backgrounds} from "./data/backgrounds.js";

export default class Character {
  constructor(level = 1) {
    this.characterName = "";
    this.characterClass = "";
    this.characterRace = "";
    this.characterBackground = "";
    this.playerName = "";
    this.level = level;
    this.pros = [];
    this.stats = {
      str: new Stat("str"),
      dex: new Stat("dex"),
      con: new Stat("con"),
      int: new Stat("int"),
      wis: new Stat("wis"),
      cha: new Stat("cha"),
    };
    this.setProBonus();
  }

  rollAP() {
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
    document.getElementById("pro-bonus").innerHTML = `+${this.proBonus}`;
  }

  addPro(name) {
    const sta = skills.find((skill) => {
      return skill.id === name;
    }).stat;
    let pro = document.getElementById("pro-bonus").innerHTML;
    pro = parseInt(pro.replace("+", ""));

    const box = document.getElementById(name);

    let bon = this.stats[sta].mod;

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
    document.getElementById(name + "-mod").innerHTML = bon;
  }

  updateStats() {
    console.log("updating stats...");
    // Calls Proficiency updating funciton
    this.setProBonus();

    // Calcualte Ability Modifiers
    for (let stat in this.stats) {
      let currentStat = this.stats[stat];
      currentStat.abilityScore = document.getElementById(stat).value;
      currentStat.modGen();
      document.getElementById(stat + "Mod").innerHTML = currentStat.mod;
    }

    //Calculate Skill Modifiers
    skills.map((skill) => {
      this.addPro(skill.id);
    });

    // Calculate Passive Perception
    let pro = 0;
    if (document.getElementById("perc").checked == true) {
      pro = this.proBonus;
    }
    document.getElementById("pasPer").innerHTML = 10 + this.stats.wis.mod + pro;

    // Calculating initiative Mod
    document.getElementById("initiative").innerHTML = this.stats.dex.mod;
  }
}

class Stat {
  constructor(name) {
    this.name = name;
    this.element = document.getElementById(name);
    this.abilityScore = this.element.value;
    this.modGen();
  }
  setScore(newScore) {
    this.abilityScore = newScore;
  }
  modGen() {
    this.mod = Math.floor((this.abilityScore - 10) / 2);
  }
}
