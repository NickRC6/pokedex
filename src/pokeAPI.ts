

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || (PokeAPI.baseURL + "/location-area");
    const result = await fetch(url);
    const data: ShallowLocations = await result.json();
    return data
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = PokeAPI.baseURL + locationName;
    const result = await fetch(url);
    const data: Location = await result.json();
    return data
  }
}

export type ShallowLocations = {
    count: number;
    next: string;
    previous: string;
    results: {
    name: string;
    url: string;
  }[];
}

export type Location = {
  // add properties here
};

