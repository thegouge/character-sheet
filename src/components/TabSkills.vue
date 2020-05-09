<template>
	<div>
		<ul class="throws">
			<h3>Saving Throws</h3>
			<li></li>
		</ul>

		<ul class="skills">
			<h3>Skills</h3>
			{skills.map((skill) => renderSkill(skill))}
		</ul>
	</div>
</template>

<script>
import { throws, skills } from "../lib/skillData";
import { calcMod } from "../lib/helperFunctions";

export default {
	name: "TabSkills",
	methods: {
		renderSkill(skill) {
			let statMod = calcMod(abilityScores[skill.stat].score);
			let pro = "pro-icon ";

			if (skill.proficient) {
				statMod += proficiency;
				pro += "filled";
			} else {
				pro += "open";
			}

			return `
			<li key=${skill.name}>
				<span class=${pro}></span>
				<span class="skill-mod">${statMod}</span>
				<span class="skill-name">${skill.name}</span>
			</li>`;
		},
	},
};
</script>

<style lang="scss" scoped>
.throws,
.skills {
	margin-top: 1rem;
	display: grid;
	column-gap: 1em;
	justify-items: start;

	h3 {
		grid-column-start: 1;
		grid-column-end: 3;
	}

	li {
		box-sizing: border-box;
		border: 1px solid black;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
}

.throws {
	grid-template-columns: 1fr 1fr;
}

.pro-icon {
	position: relative;
	border-radius: 50%;
	border: 1px solid black;
	width: 0.75rem;
	height: 0.75rem;
	margin-top: 0.1rem;
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
