export const classes = [
    {
		"name": "Barbarian",
		"hitDice": "1d12",
		"hp": 12,
		"throws": [
            {
				"checked": true,
				"id": "str-st",
				"stat": "str"
			},
			{
				"checked": true,
				"id": "con-st",
				"stat": "con"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Animal Handling",
					"id": "anim",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Nature",
					"id": "natu",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Survival",
					"id": "surv",
					"stat": "wis",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light, Medium, Sheilds; Weapons: Simple, Martial",
		"altAttacks": "",
		"equipment": "Greataxe or Martial melee weapon, two handaxes or any simple weapon, an explorer's pack, javelins x4",
		"other": ""
	},
	{
		"name": "Bard",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Dexterity",
				"id": "dex-st",
				"stat": "dex"
			},
			{
				"name": "Charisma",
				"id": "cha-st",
				"stat": "cha"
			}
		],
		"skills": {
			"number": 3,
			"choice": [
                {
					"name": "Acrobatics",
					"id": "acro",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Animal Handling",
					"id": "anim",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Arcana",
					"id": "arca",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "Deception",
					"id": "dece",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Investigation",
					"id": "inve",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Medicine",
					"id": "medi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Nature",
					"id": "natu",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Performance",
					"id": "perf",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Persuasion",
					"id": "pers",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Sleight of Hand",
					"id": "hand",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Stealth",
					"id": "stea",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Survival",
					"id": "surv",
					"stat": "wis",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light; Weapons: Simple, Hand Xbows, Longswords, Rapiers, Shortswords; Tools: Your Choice of three musical Instruments",
		"altAttacks": " Cantrips: 2; Known Spells: 4 - first level",
		"equipment": " Rapier or Longsword or Simple Weapon; A Diplomat's or Entertainer's pack; a musical instrument, leather armor, a dagger",
		"other": ""
	},
	{
		"name": "Cleric",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Wisdom",
				"id": "wis-st",
				"stat": "wis"
			},
			{
				"name": "Charisma",
				"id": "cha-st",
				"stat": "cha"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Medicine",
					"id": "medi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Persuasion",
					"id": "pers",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light, Medium, Sheilds; Weapons: Simple Weapons",
		"altAttacks": " Cantrips: 3; Known Spells: ???",
		"equipment": " Mace or Warhammer (if proficient), Scale Mail or Leather Armor or Chain Mail (if proficient), Light Xbow with bolts x20 or any simple weapon, Preist's Pack or Explorer's pack, Sheild, Holy Symbol",
		"other": " spellcasting, 'divine domain'"
	},
	{
		"name": "Druid",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Intelligence",
				"id": "int-st",
				"stat": "int"
			},
			{
				"name": "Wisdom",
				"id": "wis-st",
				"stat": "wis"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Animal Handling",
					"id": "anim",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Arcana",
					"id": "arca",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Medicine",
					"id": "medi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Nature",
					"id": "natu",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Survival",
					"id": "surv",
					"stat": "wis",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light, Medium, sheilds; Weapons: Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, spears; Tools: Herbalism kit",
		"altAttacks": " Cantrips: 2; Spells Known: 2 - first level",
		"equipment": " Wooden Sheild or Simple Weapon, Scimitar or Simple Weapon, Leather Armor, Explorer's pack, Druidic Focus",
		"other": " 'Spellcasting', 'Druidic', won't wear armor or shields made of metal"
	},
	{
		"name": "Fighter",
		"hitDice": "1d10",
		"hp": 10,
		"throws": [
            {
			"name": "Strength",
			"id": "str-st",
			"stat": "str"
		}, {
			"name": "Constitution",
			"id": "con-st",
			"stat": "con"
		}],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Acrobatics",
					"id": "acro",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Animal Handling",
					"id": "anim",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Survival",
					"id": "surv",
					"stat": "wis",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: All, Sheilds; Weapons: Simple, Martial",
		"altAttacks": "",
		"equipment": " Chain Mail or Leather Armor with Longbow and Arrows x20, Martial Weapon with a shield or two Martial Weapons, Light Xbow and Bolts x20 or two Hand Axes, Dungeoneer's Pack or an Explorer's Pack",
		"other": " 'Fighting Style', 'Second Wind'"
	},
	{
		"name": "Monk",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Strength",
				"id": "str-st",
				"stat": "str"
			},
			{
				"name": "Dexterity",
				"id": "dex-st",
				"stat": "dex"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Acrobatics",
					"id": "acro",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Stealth",
					"id": "stea",
					"stat": "dex",
					"checked": false
				}
			]
		},
		"proficiencies": " Weapons: Simple, Shortswords; Tools: Type of Artisan's Tools or a Musical Instrument",
		"altAttacks": "",
		"equipment": " Shortsword or Any Simple Weapon, A Dungeoneer's Pack or Explorer's Pack, Darts x10",
		"other": " 'Unarmored Defense', 'Martial Arts'"
	},
	{
		"name": "Paladin",
		"hitDice": "1d10",
		"hp": 10,
		"throws": [
            {
				"name": "Wisdom",
				"id": "wis-st",
				"stat": "wis"
			},
			{
				"name": "Charisma",
				"id": "cha-st",
				"stat": "cha"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Medicine",
					"id": "medi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Persuasion",
					"id": "pers",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: All, sheilds; Weapons: Simple, Martial",
		"altAttacks": "",
		"equipment": " Martial Weapon and a Shield or two Martial Weapons, Javelins x5 or any Simple Weapon, Priest's Pack or an Explorer's Pack, Chain Mail, Holy Symbol",
		"other": " 'Divine Sense', 'Lay on Hands'"
	},
	{
		"name": "Ranger",
		"hitDice": "1d10",
		"hp": 10,
		"throws": [
            {
				"name": "Strength",
				"id": "str-st",
				"stat": "str"
			},
			{
				"name": "Dexterity",
				"id": "dex-st",
				"stat": "dex"
			}
		],
		"skills": {
			"number": 3,
			"choice": [
                {
					"name": "Animal Handling",
					"id": "anim",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Investigation",
					"id": "inve",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Nature",
					"id": "natu",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Stealth",
					"id": "stea",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Survival",
					"id": "surv",
					"stat": "wis",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light, Medium, shields; Weapons: Simple, Martial",
		"altAttacks": "",
		"equipment": " Scale Mail or Leather Armor, two Shortswords or two Simple Weapons, Dungeoneer's Pack or Explorer's Pack, Longbow and Arrows x20",
		"other": " 'Favored Enemy', 'Natural Explorer'"
	},
	{
		"name": "Rogue",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Dexterity",
				"id": "dex-st",
				"stat": "dex"
			},
			{
				"name": "Intelligence",
				"id": "int-st",
				"stat": "int"
			}
		],
		"skills": {
			"number": 4,
			"choice": [
                {
					"name": "Acrobatics",
					"id": "acro",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Athletics",
					"id": "athl",
					"stat": "str",
					"checked": false
				},
				{
					"name": "Deception",
					"id": "dece",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Investigation",
					"id": "inve",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Perception",
					"id": "perc",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Performance",
					"id": "perf",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Persuasion",
					"id": "pers",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Sleight of Hand",
					"id": "hand",
					"stat": "dex",
					"checked": false
				},
				{
					"name": "Stealth",
					"id": "stea",
					"stat": "dex",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light; Weapons: Simple, Hand Xbows, Longswords, Rapiers, Shortswords; Tools: Theives's Tools",
		"altAttacks": "",
		"equipment": " Rapier or Shortsword, Shortbow and Arrows x20 or a Shortsword, Burgalar's Pack or Dungeoneer's Pack or Explorer's Pack, Leather Armor, Two Daggers, Thieves's Tools",
		"other": " 'Expertise', 'Sneak Attack', 'Thieves's Cant"
	},
	{
		"name": "Sorcerer",
		"hitDice": "1d6",
		"hp": 6,
		"throws": [
            {
				"name": "Constitution",
				"id": "con-st",
				"stat": "con"
			},
			{
				"name": "Charisma",
				"id": "cha-st",
				"stat": "cha"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Arcana",
					"id": "arca",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Deception",
					"id": "dece",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Persuasion",
					"id": "pers",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				}
			]
		},
		"proficiencies": " Weapons: Daggers, Darts, Slings, Quarterstaffs, Light Xbows",
		"altAttacks": " Cantrips: 4; Known Spells: 2 - 1st level",
		"equipment": " Light Xbow and Bolts x20 or any Simple Weapon, Component Pouch or Arcane Focus, Dungeoneer's Pack or Explorer's Pack, Two Daggers",
		"other": " Spellcasting, 'Sorcerous Origin'"
	},
	{
		"name": "Warlock",
		"hitDice": "1d8",
		"hp": 8,
		"throws": [
            {
				"name": "Wisdom",
				"id": "wis-st",
				"stat": "wis"
			},
			{
				"name": "Charisma",
				"id": "cha-st",
				"stat": "cha"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Arcana",
					"id": "arca",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Deception",
					"id": "dece",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Intimidation",
					"id": "inti",
					"stat": "cha",
					"checked": false
				},
				{
					"name": "Investigation",
					"id": "inve",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Nature",
					"id": "natu",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				}
			]
		},
		"proficiencies": " Armor: Light; Weapons: Simple",
		"altAttacks": " Cantrips: 2; Known Spells: 2 - First Level",
		"equipment": " Light Xbow and Bolts x20 or Simple Weapon, Component Pouch or Arcane Focus, Scholar's Pack or Dungeoneer's Pack, Leather Armor, Simple Weapon, Two Daggers",
		"other": " 'Otherworldly Patron', 'Pact Magic'"
	},
	{
		"name": "Wizard",
		"hitDice": "1d6",
		"hp": 6,
		"throws": [
            {
				"name": "Intelligence",
				"id": "int-st",
				"stat": "int"
			},
			{
				"name": "Wisdom",
				"id": "wis-st",
				"stat": "wis"
			}
		],
		"skills": {
			"number": 2,
			"choice": [
                {
					"name": "Arcana",
					"id": "arca",
					"stat": "int",
					"checked": false
				},
				{
					"name": "History",
					"id": "hist",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Insight",
					"id": "insi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Investigation",
					"id": "inve",
					"stat": "int",
					"checked": false
				},
				{
					"name": "Medicine",
					"id": "medi",
					"stat": "wis",
					"checked": false
				},
				{
					"name": "Religion",
					"id": "reli",
					"stat": "int",
					"checked": false
				}
			]
		},
		"proficiencies": " Weapons: Daggers, Darts, Slings, Quarterstaffs, Light Xbows",
		"altAttacks": "Cantrips: 3; Known Spells: 6 - First Level",
		"equipment": " Quarterstaff or Dagger, Component Pouch or Arcane Focus, Scholar's Pack or Explorer's Pack, Spellbook",
		"other": " Spellcasting, 'Arcane Recovery'"
	}
]
