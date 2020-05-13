<template>
  <div>
    <h3>Ability Scores</h3>
    <ul class="scores">
      <div v-for="ability in abilityScores" :key="ability.name" class="score-block">
        <div class="score">{{ability.score}}</div>
        <div class="modifier">{{modifier(ability.score)}}</div>
      </div>
    </ul>

    <ul class="throws">
      <h3>Saving Throws</h3>
      <RenderedSkill v-for="sThrow in throws" :key="sThrow.name" :skill="sThrow" />
    </ul>

    <ul class="skills">
      <h3>Skills</h3>
      <RenderedSkill v-for="skill in skills" :key="skill.name" :skill="skill" />
    </ul>
  </div>
</template>

<script>
import RenderedSkill from "./RenderedSkill";
import { throws, skills } from "../lib/skillData";
import { calcMod } from "../lib/helperFunctions";

export default {
  name: "TabSkills",
  components: {
    RenderedSkill
  },
  data() {
    return {
      throws,
      skills
    };
  },
  computed: {
    abilityScores() {
      return this.$store.getters.abilityScores;
    }
  },
  methods: {
    modifier(score) {
      return calcMod(score);
    }
  }
};
</script>

<style scoped>
.scores {
  display: flex;
  justify-content: space-around;
}

.score-block {
  font-size: 1.5rem;
  text-align: center;
}

.throws,
.skills {
  padding: 0;
  margin-top: 1rem;
  display: grid;
  column-gap: 1em;
  justify-items: start;
}

h3 {
  grid-column-start: 1;
  grid-column-end: 3;
}

.throws {
  grid-template-columns: 1fr 1fr;
}
</style>
