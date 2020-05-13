<template>
  <div class="char-sheet">
    <CharacterSheetTop />
    <CharacterSheetTabs />
  </div>
</template>

<script>
import CharacterSheetTop from "./CharacterSheetTop";
import CharacterSheetTabs from "./CharacterSheetTabs";

export default {
  name: "CharacterSheet",
  components: {
    CharacterSheetTop,
    CharacterSheetTabs
  }}
</script>

<style lang="scss" scoped>
.char-sheet {
  width: 100%;
  padding: 0.7rem;
  box-sizing: border-box;
}

li {
  list-style: none;
}

.ability-scores {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  li {
    // background: url("../../assets/sheild.jpg");
    border: 1px solid black;
    padding: 0.5rem 0;
    min-width: 7rem;
    flex: 1;
    text-align: center;
  }
}

@media screen and (min-width: 30rem) {
  .ability-scores {
    flex-wrap: nowrap;
    justify-content: start;

    li {
      min-width: 4rem;
      max-width: 5rem;
    }
  }
}
</style>
