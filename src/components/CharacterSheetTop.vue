<template>
  <div class="top-block">
    <div class="char-details">
      <h2 class="char-name">{{ name }}</h2>
      <h3 class="char-slug">
        {{description.gender}} {{description.race}} {{charClass}}
        <p class="char-level">Level {{level}}</p>
      </h3>
    </div>

    <hr />

    <div class="import-info">
      <div class="box health">
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
      "description",
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
      if (this.description.race === "Human") {
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

  .char-name {
    font-size: 2rem;
    margin: 0;
  }

  .box {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 10px;
  }

  .char-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .char-slug {
    text-align: right;
    font-weight: normal;
    margin: 0;
    font-size: 0.9rem;
  }

  .char-level {
    margin: 0;
  }

  .import-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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
    }
  }

  .display {
    font-size: 1.3rem;
    margin: 0;
  }
}
</style>