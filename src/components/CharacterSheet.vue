<template>
	<div class="char-sheet">
		<div class="top-block">
			<h2 class="char-name">{{ name }}</h2>
			<div class="health-box">
				<div class="hp-toolbox">
					<button>+</button>
					<input type="number" title="amount to change health by" />
					<button>-</button>
				</div>
				<div class="health-display">{{ currHP }}/{{ maxHP }}</div>
			</div>
			<div class="char-details">
				Level: {{ level }} Class:
				{{ charClass }}
			</div>
		</div>

		<CharacterSheetTabs />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import CharacterSheetTabs from "./CharacterSheetTabs";

export default {
	name: "CharacterSheet",
	components: {
		CharacterSheetTabs,
	},
	data() {
		return {
			charName: "lurr",
		};
	},
	computed: {
		...mapGetters(["name", "health", "level", "charClass"]),
		currHP() {
			return this.health[0];
		},
		maxHP() {
			return this.health[1];
		},
	},
};
</script>

<style lang="scss" scoped>
.char-sheet {
	width: 100%;
	padding: 0.7rem;
	box-sizing: border-box;
}

.top-block {
	padding: 0.3rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	p {
		min-width: 6rem;
		text-align: center;
	}
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
