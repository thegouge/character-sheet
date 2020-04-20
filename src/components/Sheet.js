import React from "react";

import { Tabs } from "./Tabs";

import { calcMod } from "../lib/helpers";

import "../styles/Sheet.scss";

export const Sheet = ({ character }) => {
	const { name, level, charClass, abilityScores } = character;

	const changeHealth = (direction) => {
		const HPmod = parseInt(document.querySelector("#hp-input").value);
		if (HPmod < 1) return;
		if (direction === "heal-btn") {
			console.log("heal");
			character.HP += HPmod;
		} else {
			console.log("damage");
			character.HP -= HPmod;
		}
	};

	return (
		<div className="char-sheet">
			<div className="top-block">
				<h2>{name}</h2>
				<div className="health-box">
					<div className="hp-toolbox">
						<button id="heal-btn" onClick={(e) => changeHealth(e.target.id)}>
							Heal
						</button>
						<input
							id="hp-input"
							type="number"
							placeholder="amount to change HP"
						/>
						<button id="damage-btn" onClick={(e) => changeHealth(e.target.id)}>
							Damage
						</button>
					</div>
					<div className="hp-display">{`Hit Points: ${character.HP}/${character.maxHP}`}</div>
				</div>
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
