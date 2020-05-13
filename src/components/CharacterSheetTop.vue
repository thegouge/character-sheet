<template>
  <div class="top-block">
    <h2 class="char-name">{{ name }}</h2>

    <div class="box char-details">
      Level: {{ level }}
      <br />
      Class: {{ charClass }}
    </div>

    <div class="box health">
      <div class="hp-toolbox">
        <button class="heal-btn">Heal</button>
        <input type="number" title="amount to change health by" />
        <button class="damage-btn">Damage</button>
      </div>
      <div class="health-display">
        <p class="display">HP</p>
        {{ currHP }}/{{ maxHP }}
      </div>
    </div>

    <div class="box armor-class">
      <p class="display">Armor Class</p>
      {{armorClass}}
    </div>

    <div class="box initiative">
      <p class="display">Initiative</p>
      {{dexMod}}
    </div>

    <div class="box speed">
      <p class="display">Speed</p>
      {{walkSpeed}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { calcMod } from "../lib/helperFunctions";

export default {
  name: "CharacterSheetTop",
  computed: {
    ...mapGetters([
      "name",
      "health",
      "level",
      "race",
      "charClass",
      "abilityScores",
      "equipment"
    ]),
    currHP() {
      return this.health[0];
    },
    maxHP() {
      return this.health[1];
    },
    dexMod() {
      return calcMod(this.abilityScores.dex.score);
    },
    armorClass() {
      const baseAC = this.equipment.armor.ac;

      return baseAC + this.dexMod;
    },
    walkSpeed() {
      if (this.race === "Human") {
        return "30ft";
      } else {
        return "???ft";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.top-block {
  padding: 0.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .char-name {
    font-size: 2rem;
  }

  .box {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 5%;
  }

  .char-details {
    text-align: left;
  }

  .health {
    display: flex;
    align-items: center;

    .hp-toolbox {
      display: flex;
      flex-direction: column;
    }

    .health-display {
      text-align: center;
      align-self: center;
      padding: 0.5em;
    }
  }

  .display {
    font-size: 1.3rem;
    margin: 0;
  }
}
</style>