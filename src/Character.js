export default class Character {
  constructor() {
    this.str = new Stat("str");
    this.dex = new Stat("dex");
    this.con = new Stat("con");
    this.int = new Stat("int");
    this.wis = new Stat("wis");
    this.cha = new Stat("cha");
    this.stats = [this.str, this.dex, this.con, this.int, this.wis, this.cha];
  }
  modGen(stat) {
    stat.mod = Math.floor((stat.abilityScore - 10) / 2);
  }
  updateStats() {
    console.log("updating stats...");
    // Calls Proficiency updating funciton
    proficiencyChecker(document.getElementById("char-level").value);

    // Calcualte Ability Modifiers
    character.stats.forEach(function(s) {
      s.abilityScore = document.getElementById(s.name).value;
      s.modGen(s.abilityScore);
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
    document.getElementById("initiative").innerHTML = character.stats[1].mod;

    // Calculate Passive Perception
    let pro;
    if (document.getElementById("perc").checked == true) {
      pro = document.getElementById("pro-bonus").innerHTML;
      pro = parseInt(pro.replace("+", ""));
    } else {
      pro = 0;
    }
    document.getElementById("pasPer").innerHTML = 10 + character.wis.mod + pro;
  }
}

class Stat {
  constructor(name) {
    this.name = name;
    this.element = document.getElementById(name);
    this.abilityScore = this.element.value;
    this.modGen(this.abilityScore);
  }
  modGen(score) {
    this.mod = Math.floor((score - 10) / 2);
  }
}
