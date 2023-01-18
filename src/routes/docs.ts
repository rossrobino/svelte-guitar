import Chord from "$lib/components/Chord.svelte";
import type { Info, Component } from "@rossrobino/components";

export const info: Info = {
	packageName: "svelte-guitar",
	gitHub: "https://github.com/rossrobino/svelte-guitar",
	projectHomepage: "https://svelte-guitar.robino.dev",
	author: "Ross Robino",
	authorHomepage: "https://robino.dev",
	license: "MIT",
};

export const componentList: Component[] = [
	{
		component: Chord,
		name: "Chord",
		purpose: "Generates an svg of a guitar chord. Style with the css 'color' attribute.",
		props: [
			{ name: "class", purpose: "class", type: "string", default: "" },
			{ name: "id", purpose: "id", type: "string", default: "" },
			{
				name: "size",
				purpose: "Size in pixels",
				type: "number",
				default: "",
			},
			{
				name: "strings",
				purpose: "Number of strings on the instrument",
				type: "number",
				default: "6",
			},
			{
				name: "notes",
				purpose: "Notes to create the chord",
				type: "Array of note objects",
				default: "[]",
			},
			{
				name: "name",
				purpose: "Name of the chord",
				type: "string",
				default: "",
			},
		],
		example: {
			notes: [
				{ finger: 0, string: 4, fret: 0 },
				{ finger: 1, string: 3, fret: 2 },
				{ finger: 2, string: 1, fret: 2 },
				{ finger: 3, string: 2, fret: 3 },
			],
			name: "D",
			class: "text-indigo-700",
		},
		references: [],
	},
];
