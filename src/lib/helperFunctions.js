export function calcMod(abilityScore) {
	return Math.floor((abilityScore - 10) / 2);
}

export function isWiderThan(breakPoint) {
	return window.outerWidth > breakPoint;
}
