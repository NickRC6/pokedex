import type { State } from "../state.js";

export async function commandMapb(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = locations.previous
    state.nextLocationsURL = locations.next
    console.log(locations)
}

