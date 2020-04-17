import React from "react";

import { throws, skills } from "../../lib/skillData";
import { calcMod } from "../../lib/helpers";

import "../../styles/skills.scss";

export const Skills = ({ character }) => {
	const { abilityScores, proficiency } = character;

	const renderSkill = (skill) => {
		let statMod = calcMod(abilityScores[skill.stat].score);
		let pro = "pro-icon ";

		if (skill.proficient) {
			statMod += proficiency;
			pro += "filled";
		} else {
			pro += "open";
		}

		return (
			<li key={skill.name}>
				<span className={pro}></span>
				<span className="skill-mod">{statMod}</span>
				<span className="skill-name">{skill.name}</span>
			</li>
		);
	};

	return (
		<div>
			<ul className="throws">
				<h3>Saving Throws</h3>
				{throws.map((sThrow) => renderSkill(sThrow))}
			</ul>

			<ul className="skills">
				<h3>Skills</h3>
				{skills.map((skill) => renderSkill(skill))}
			</ul>
		</div>
	);
};
