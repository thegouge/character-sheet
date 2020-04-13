import React, {useState} from "react";

import "./Sheet.css";

export const Sheet = () => {
    const [abilityScores, setScores] = useState([{score: 10, mod: 0}, {score: 10, mod: 0}, {score: 10, mod: 0}, {score: 10, mod: 0}, {score: 10, mod: 0}, {score: 10, mod: 0}]);

    return (
        <div className="char-sheet">
            <div className="top-block"></div>
            <ul className="ability-scores">
                {
                    abilityScores.map((score) => (
                        <li>
                            <div className="score">{score.score}</div>
                            <div className="mod">{score.mod}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}