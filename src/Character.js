export default class Character {
  constructor(level = 1) {
    this.characterName = "";
    this.characterClass = "";
    this.characterRace = "";
    this.characterBackground = "";
    this.playerName = "";
    this.level = level;
    this.stats = {
      str: new Stat("str"),
      dex: new Stat("dex"),
      con: new Stat("con"),
      int: new Stat("int"),
      wis: new Stat("wis"),
      cha: new Stat("cha"),
      // statList: [
      //   new Stat("str"),
      //   new Stat("dex"),
      //   new Stat("con"),
      //   new Stat("int"),
      //   new Stat("wis"),
      //   new Stat("cha"),
      // ],
    };
    this.skills = {};
  }
  updateStats() {
    console.log("updating stats...");
    // Calls Proficiency updating funciton
    proficiencyChecker(document.getElementById("char-level").value);

    // Calcualte Ability Modifiers
    for (let stat of this.stats) {
      stat.abilityScore = document.getElementById(stat.name).value;
      stat.modGen();
      document.getElementById(s.name + "Mod").innerHTML = s.mod;
    }

    // Calculate Saving Throw Modifiers
    skills.savingThrows.map((save) => {
      addPro(save.id, save.stat);
    });

    //Calculate Skill Modifiers
    skills.skills.map((skill) => {
      addPro(skill.id, skill.stat);
    });

    this.updatePage();
  }
  updatePage() {
    // Calculate Passive Perception
    let pro;
    if (document.getElementById("perc").checked == true) {
      pro = document.getElementById("pro-bonus").innerHTML;
      pro = parseInt(pro.replace("+", ""));
    } else {
      pro = 0;
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
