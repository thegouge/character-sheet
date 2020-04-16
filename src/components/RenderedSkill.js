import React from "react";

export const RenderedSkill = ({ skill, statMod }) => {
	return (
		<li>
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
};
