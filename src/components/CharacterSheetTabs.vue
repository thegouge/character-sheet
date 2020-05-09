<template>
	<div class="tab-router">
		<ul v-if="showTabs" class="tab-bar">
			<li
				v-for="(tabName, index) in tabs"
				:key="tabName"
				:class="`tab ${currentTab === index ? 'active-tab' : ''}`"
				@click="setActiveTab(index)"
			>
				{{ tabName }}
			</li>
		</ul>

		<div v-else class="menu-button">
			Menu Button BABY!
		</div>

		<div class="tab-view">
			<TabSkills v-show="currentTab == 0" />
			<TabAttacks v-show="currentTab == 1" />
			<TabSpells v-show="currentTab == 2" />
			<TabInventory v-show="currentTab == 3" />
			<TabTraits v-show="currentTab == 4" />
			<TabDescribe v-show="currentTab == 5" />
		</div>
	</div>
</template>

<script>
import TabSkills from "./TabSkills";
import TabAttacks from "./TabAttacks";
import TabSpells from "./TabSpells";
import TabInventory from "./TabInventory";
import TabTraits from "./TabTraits";
import TabDescribe from "./TabDescribe";

export default {
	name: "CharacterSheetTabs",
	components: {
		TabSkills,
		TabAttacks,
		TabSpells,
		TabInventory,
		TabTraits,
		TabDescribe,
	},
	data() {
		return {
			tabs: [
				"Skills",
				"Attacks",
				"Spells",
				"Inventory",
				"Feats & Traits",
				"Description",
			],
			currentTab: 0,
			showTabs: true,
		};
	},
	methods: {
		checkWidth() {
			this.showTabs = window.outerWidth > 663;
		},
		setActiveTab(index) {
			this.currentTab = index;
		},
	},
	mounted() {
		this.checkWidth();
		window.addEventListener("resize", this.checkWidth);
	},
};
</script>

<style lang="scss" scoped>
.sheet-router {
	margin-top: 1em;
}

.tab-bar {
	display: flex;
	justify-content: space-between;
	max-width: 32em;
	position: relative;
	list-style: none;
	margin: 0;
	padding: 0 40px;
	line-height: 24px;

	&:before {
		z-index: 1;
	}

	&:after {
		position: absolute;
		content: "";
		width: 100%;
		bottom: 0;
		left: 0;
		border-bottom: 1px solid #aaa;
		z-index: 1;
	}

	.tab {
		position: relative;
		z-index: 0;
		margin: 0 -3px;
		padding: 0 15px;
		border: 1px solid #aaa;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		background: linear-gradient(
			to bottom,
			rgb(235, 235, 235) 50%,
			rgb(204, 203, 203) 100%
		);
		text-shadow: 0 1px white;
		display: inline-block;
		cursor: pointer;
		user-select: none;

		&:before,
		&:after {
			position: absolute;
			bottom: -1px;
			width: 6px;
			height: 6px;
			content: " ";
			border: 1px solid #aaa;
		}

		&:before {
			left: -7px;
			border-bottom-right-radius: 6px;
			border-width: 0 1px 1px 0;
			box-shadow: 1px 0.5px 0 rgb(204, 203, 203);
		}

		&:after {
			right: -7px;
			border-bottom-left-radius: 6px;
			border-width: 0 0 1px 1px;
			box-shadow: -1px 0.5px 0 rgb(204, 203, 203);
		}

		&.active {
			z-index: 2;
			border-bottom-color: white;
			background: white;

			&:before {
				box-shadow: 2px 2px 0 white;
			}

			&:after {
				box-shadow: -2px 2px 0 white;
			}
		}
	}
}

@media screen and (min-width: 38rem) {
	.tab-bar {
		display: flex;
		justify-content: space-between;
		max-width: 32em;
		position: relative;
		list-style: none;
		margin: 0;
		padding: 0 40px;
		line-height: 24px;

		&:before {
			z-index: 1;
		}

		&:after {
			position: absolute;
			content: "";
			width: 100%;
			bottom: 0;
			left: 0;
			border-bottom: 1px solid #aaa;
			z-index: 1;
		}

		.tab {
			position: relative;
			z-index: 0;
			margin: 0 -3px;
			padding: 0 15px;
			border: 1px solid #aaa;
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
			background: linear-gradient(
				to bottom,
				rgb(235, 235, 235) 50%,
				rgb(204, 203, 203) 100%
			);
			text-shadow: 0 1px white;
			display: inline-block;
			cursor: pointer;
			user-select: none;

			&:before,
			&:after {
				position: absolute;
				bottom: -1px;
				width: 6px;
				height: 6px;
				content: " ";
				border: 1px solid #aaa;
			}

			&:before {
				left: -7px;
				border-bottom-right-radius: 6px;
				border-width: 0 1px 1px 0;
				box-shadow: 1px 0.5px 0 rgb(204, 203, 203);
			}

			&:after {
				right: -7px;
				border-bottom-left-radius: 6px;
				border-width: 0 0 1px 1px;
				box-shadow: -1px 0.5px 0 rgb(204, 203, 203);
			}

			&.active {
				z-index: 2;
				border-bottom-color: white;
				background: white;

				&:before {
					box-shadow: 2px 2px 0 white;
				}

				&:after {
					box-shadow: -2px 2px 0 white;
				}
			}
		}
	}
}
</style>
