import React from "react";

import { throws, skills } from "../data/skills";

import "./Sheet.scss";

export const Sheet = ({ character }) => {
	const { name, level, charClass, abilityScores, proficiency } = character;

	const calcMod = (score) => {
		return Math.floor((score - 10) / 2);
	};

	const skillRender = (list) => {
		return list.map((skill) => {
			let statMod = calcMod(abilityScores[skill.stat].score);
			if (skill.proficient) {
				statMod += proficiency;
			}

			return (
				<li key={skill.name}>
					<input
						type="checkBox"
						className="proficient"
						id={`${skill.name}-pro`}
						checked={skill.proficient}
						readOnly={true}
					/>
					<span className="skill-mod">{statMod}</span>
					<span className="skill-name">{skill.name}</span>
				</li>
			);
		});
	};

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
				{skillRender(throws)}
			</ul>

			<ul className="skills">
				<h3>Skills</h3>
				{skillRender(skills)}
			</ul>
		</div>
	);
};
