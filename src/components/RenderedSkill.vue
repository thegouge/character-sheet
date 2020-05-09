<template>
	<li>
		<span :class="`pro-icon ${isProficient ? 'filled' : ''}`"></span>
		<span class="skill-mod">{{ statMod }}</span>
		<span class="skill-name">{{ skill.name }}</span>
	</li>
</template>

<script>
import { mapGetters } from "vuex";
import { calcMod } from "../lib/helperFunctions";

export default {
	name: "RenderedSkill",
	props: {
		skill: {
			type: Object,
			required: true,
		},
	},
	data() {
		return { isProficient: this.skill.proficient };
	},
	computed: {
		...mapGetters(["abilityScores", "proficiencyBonus"]),
		statMod() {
			let result = calcMod(this.abilityScores[this.skill.stat].score);

			if (this.isProficient) {
				result += this.proficiencyBonus;
			}

			return result;
		},
	},
};
</script>

<style lang="scss" scoped>
li {
	box-sizing: border-box;
	border: 1px solid black;
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.pro-icon {
	display: block;
	position: relative;
	border-radius: 50%;
	border: 1px solid black;
	width: 0.75rem;
	height: 0.75rem;
	margin-top: 0.04rem;
	padding: 0.1rem;

	&.filled {
		&:before {
			content: "";
			display: block;
			position: relative;
			width: 0.7rem;
			height: 0.7rem;
			top: 0.025rem;
			left: 0.025rem;
			border-radius: 50%;
			background: black;
		}
	}
}
</style>
