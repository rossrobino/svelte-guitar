# svelte-guitar

## Common components for guitar playing

MIT License

[Read the full documentation](https://svelte-guitar.robino.dev)

## Work in progress

This project is a work in progress with plans to add more components soon. Open to contributions.

## Install

`npm i -D svelte-guitar`

## Usage (svelte)

```svelte
<script>
    import { Chord } from "svelte-guitar";
</script>

<Chord
    notes={[
        {"finger":0,"string":4,"fret":0},
        {"finger":1,"string":3,"fret":2},
        {"finger":2,"string":1,"fret":2},
        {"finger":3,"string":2,"fret":3},
    ]}
    name="D"
/>
```
