import type { State } from "../state.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a location name or ID");
    }
    const location = await state.pokeAPI.fetchLocation(args[0])
    console.log(location)
}