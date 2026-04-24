import { StatementSync } from "node:sqlite";
import type { State } from "../state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("You must provide a valid Pokemon name or ID");
    }
    if (state.pokedex[args[0]]) {
        const pokemon = state.pokedex[args[0]]
        console.log(`Name: ${pokemon.name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\nStats:`) 
        for (const stats of pokemon.stats) {
            console.log("  -" + `${stats.stat.name}: ${stats.base_stat}`)
            }
        console.log("Types:")
        for (const types of pokemon.types) {
            console.log("  -" + `${types.type.name}`)
            }
        }
    else {
        console.log("You have not caught that pokemon.")
    }
}