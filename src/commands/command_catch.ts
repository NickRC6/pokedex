import type { State } from "../state.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("You must provide a valid Pokemon name or ID");
    }
    const pokemon = await state.pokeAPI.fetchPokemon(args[0])
    const speciesRes = await fetch(pokemon.species.url);
    const species = await speciesRes.json();

    const rate = species.capture_rate; 
    const chance = rate / 255;
    console.log(`Throwing a Pokeball at ${pokemon.name}...`)
    if (Math.random() < chance) {
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
    } else {
        console.log(`${pokemon.name} escaped!`);
    }
}