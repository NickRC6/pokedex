import type { State } from "../state.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("You must provide a valid Pokemon name or ID");
    }
    const pokemon = await state.pokeAPI.fetchPokemon(args[0])
    console.log(`Throwing a Pokeball at ${pokemon.name}...`)
}