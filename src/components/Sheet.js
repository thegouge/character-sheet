import React from "react";

import { throws, skills } from "../lib/skills";
import { calcMod } from "../lib/helpers";

import { RenderedSkill } from "./RenderedSkill";

import "../styles/Sheet.scss";

export const Sheet = ({ character }) => {
	const { name, level, charClass, abilityScores, proficiency } = character;

	return (
		<div className="char-sheet">
			<div className="top-block">
				<h2>{name}</h2>
				<p>
					Lvl {level} {charClass}
				</p>
			</div>

			<ul className="ability-scores">
				{Object.entries(abilityScores).map(([stat, score]) => (
					<li key={stat}>
						<h3>{stat.toUpperCase()}</h3>
						<div className="score">{score.score}</div>
						<div className="mod">{calcMod(score.score)}</div>
					</li>
				))}
			</ul>

			<ul className="throws">
				<h3>Saving Throws</h3>
				{throws.map((skill) => {
					let statMod = calcMod(abilityScores[skill.stat].score);
					if (skill.proficient) statMod += proficiency;

					return (
						<RenderedSkill key={skill.name} skill={skill} statMod={statMod} />
					);
				})}
			</ul>

			<ul className="skills">
				<h3>Skills</h3>
				{skills.map((skill) => {
					let statMod = calcMod(abilityScores[skill.stat].score);
					if (skill.proficient) statMod += proficiency;

					return (
						<RenderedSkill key={skill.name} skill={skill} statMod={statMod} />
					);
				})}
			</ul>
		</div>
	);
};
