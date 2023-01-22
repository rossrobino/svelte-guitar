<script lang="ts">
	import Chord from "$lib/components/Chord.svelte";

	let props = {
		size: 300,
		strings: 6,
		name: "D",
		notes: [
			{ finger: 0, string: 4, fret: 0 },
			{ finger: 1, string: 3, fret: 2 },
			{ finger: 2, string: 1, fret: 2 },
			{ finger: 3, string: 2, fret: 3 },
		],
		color: "#18181b",
	};

	let qSize = "large";

	const setSize = () => {
		if (qSize === "large") props.size = 300;
		if (qSize === "small") props.size = 150;
	};

	const addNote = () => {
		props.notes.push({
			finger: 0,
			string: 6,
			fret: 0,
		});
		props = props;
	};

	const removeNote = () => {
		props.notes.pop();
		props = props;
	};

	let copied = false;

	const copyCode = async () => {
		const text = `
			<div style="color: ${props.color}">
				<Chord 
					size={${props.size}}
					name="${props.name}"
					strings={${props.strings}}
					notes={${JSON.stringify(props.notes)}}
				/>		
			</div>		
		`;
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
		} catch (error) {
			console.log(error);
		}
	};

	$: if (props) copied = false; // set back on props change
</script>

<div class="mt-4 grid md:grid-cols-2 gap-6">
	<div>
		<button on:click={copyCode} class="w-full">
			{copied ? "Copied" : "Copy code"}
		</button>

		<h3>Props</h3>
		<div class="mt-2">
			<h4><label for="qSize">size</label></h4>
			<div class="grid grid-cols-2 gap-4">
				<select
					name="qSize"
					id="qSize"
					bind:value={qSize}
					on:change={setSize}
				>
					<option value="large">large</option>
					<option value="small">small</option>
				</select>
				<input
					id="size"
					type="number"
					bind:value={props.size}
					max="1000"
				/>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h4><label for="name">name</label></h4>
				<input
					id="name"
					type="text"
					bind:value={props.name}
					maxlength="10"
				/>
			</div>
			<div>
				<h4><label for="strings">strings</label></h4>
				<input
					id="strings"
					type="number"
					bind:value={props.strings}
					min="3"
					max="15"
				/>
			</div>
		</div>

		<div>
			<h4>notes</h4>
			{#each props.notes as note, i}
				<div>
					<h5>notes[{i}]</h5>
					<div class="grid grid-cols-3 gap-4">
						<div>
							<label for="finger{i}">finger</label>
							<input
								type="number"
								name="finger"
								id="finger{i}"
								bind:value={note.finger}
								min="0"
								max="5"
							/>
						</div>
						<div>
							<label for="string{i}">string</label>
							<input
								type="number"
								name="string"
								id="string{i}"
								bind:value={note.string}
								min="0"
								max={props.strings}
							/>
						</div>
						<div>
							<label for="fret{i}">fret</label>
							<input
								type="number"
								name="fret"
								id="fret{i}"
								bind:value={note.fret}
								min="0"
								max="30"
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-2 gap-2 my-2">
			<button on:click={addNote}>Add</button>
			<button
				on:click={removeNote}
				class="bg-zinc-50 text-zinc-900 border border-zinc-900"
			>
				Remove
			</button>
		</div>
		<h3 class="mb-2">Color</h3>
		<input
			type="color"
			name="color"
			id="color"
			class="rounded-none"
			bind:value={props.color}
		/>
	</div>
	<div class="flex flex-col justify-center gap-4">
		<div class="self-center">
			{#key props}
				<div style="color: {props.color}">
					<Chord
						size={props.size}
						name={props.name}
						strings={props.strings}
						notes={props.notes}
					/>
				</div>
			{/key}
		</div>
	</div>
</div>
