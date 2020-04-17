import React, { useState } from "react";

import {
	Skills,
	Attacks,
	Spells,
	Inventory,
	Traits,
	Description,
} from "./tabs/";

import "../styles/Tabs.scss";

export const Tabs = ({ character }) => {
	const [activeTab, setActiveTab] = useState(0);
	const tabs = [
		"Skills",
		"Attacks",
		"Spells",
		"Inventory",
		"Feats & Traits",
		"Description",
	];

	let renderedComponent;

	switch (activeTab) {
		case 0:
			renderedComponent = <Skills character={character} />;
			break;

		case 1:
			renderedComponent = <Attacks character={character} />;
			break;

		case 2:
			renderedComponent = <Spells character={character} />;
			break;

		case 3:
			renderedComponent = <Inventory character={character} />;
			break;

		case 4:
			renderedComponent = <Traits character={character} />;
			break;

		case 5:
			renderedComponent = <Description character={character} />;
			break;

		default:
			renderedComponent = "";
	}

	return (
		<div className="sheet-router">
			<div className="tab-bar">
				{tabs.map((tab, i) => (
					<div
						key={tab}
						className={`tab ${activeTab === i ? "active" : ""}`}
						id={`${tab}-tab`}
						onClick={() => setActiveTab(i)}>
						{tab}
					</div>
				))}
			</div>
			{renderedComponent}
		</div>
	);
};
