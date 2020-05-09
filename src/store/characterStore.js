// import axios from "axios";
import { Character } from "../lib/Character";

const state = {
	character: new Character(),
};

const getters = {
	currentCharacter: (state) => state.character,
};

const actions = {
	// async fetchFromAPI({ commit }, { category, specific = "" }) {
	// 	const response = await axios.get("D&D API url");
	// 	console.log(response.data);
	// },
};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
