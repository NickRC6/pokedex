import type { State } from "../state.js";

export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.prevLocationsURL = locations.previous
    state.nextLocationsURL = locations.next
    for (const location of locations.results) {
        console.log(location.name)
    }
}

