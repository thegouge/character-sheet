import React from "react";

import { throws, skills } from "../../data/skills";

import "./Sheet.scss";

export const Sheet = ({ character }) => {
  const { name, level, charClass, abilityScores, proficiency } = character;

  const calcMod = (score) => {
    return Math.floor((score - 10) / 2);
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
        {abilityScores.map((score) => (
          <li key={score.name}>
            <h3>{score.name.substr(0, 3)}</h3>
            <div className="score">{score.score}</div>
            <div className="mod">{calcMod(score.score)}</div>
          </li>
        ))}
      </ul>

      <ul className="throws">
        {throws.map((savingThrow, i) => {
          let statMod = calcMod(abilityScores[i].score);
          if (savingThrow.proficient) {
            statMod += proficiency;
          }

          return (
            <li key={`${savingThrow.name}-throw`}>
              <input
                type="checkBox"
                className="proficient"
                id={`${savingThrow.name}-pro`}
                checked={savingThrow.proficient}
                readOnly={true}
              />
              <span className="skill-mod">{statMod}</span>
              <h3 className="throw">{savingThrow.name}</h3>
            </li>
          );
        })}
      </ul>

      <ul className="skills">{}</ul>
    </div>
  );
};
