import React, { useState } from "react";
import "../styles/App.scss";

import { Sheet } from "../pages/Sheet";

import { Character } from "../lib/Character";

export const App = () => {
	const [character, setCharacter] = useState(new Character());

	return (
		<div className="App">
			<Sheet character={character} />
		</div>
	);
};
