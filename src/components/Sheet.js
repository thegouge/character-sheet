import React from "react";

import { Tabs } from "./Tabs";

import { calcMod } from "../lib/helpers";

import "../styles/Sheet.scss";

export const Sheet = ({ character }) => {
	const { name, level, charClass, abilityScores } = character;

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

			<Tabs character={character} />
		</div>
	);
};
