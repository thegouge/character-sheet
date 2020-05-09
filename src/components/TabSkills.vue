<template>
	<div>
		<ul class="throws">
			<h3>Saving Throws</h3>
			<RenderedSkill
				v-for="sThrow in throws"
				:key="sThrow.name"
				:skill="sThrow"
			/>
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

export default {
	name: "TabSkills",
	components: {
		RenderedSkill,
	},
	data() {
		return {
			throws,
			skills,
		};
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
}

.throws {
	grid-template-columns: 1fr 1fr;
}
</style>
