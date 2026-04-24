import type { State } from "../state.js";

export async function commandPokedex(state: State) {
    if (Object.entries(state.pokedex).length === 0) {
        console.log("Your Pokedex is empty!")
    }
    else {
    console.log("Your Pokedex:")
    for (const [name] of Object.entries(state.pokedex)) {
        console.log("- " + name)
        }
    }
}