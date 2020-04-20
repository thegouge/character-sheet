import React, { useState } from "react";

import SwipableViews from "react-swipeable-views";

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
			<SwipableViews
				index={activeTab}
				onChangeIndex={(value) => {
					setActiveTab(value);
				}}>
				<Skills character={character} />
				<Attacks character={character} />
				<Spells character={character} />
				<Inventory character={character} />
				<Traits character={character} />
				<Description character={character} />
			</SwipableViews>
		</div>
	);
};
