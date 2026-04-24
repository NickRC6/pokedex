import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/index.js";
import { PokeAPI } from "./pokeAPI.js";
import type { Pokemon } from "./pokeAPI.js";


export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;         
  nextLocationsURL: string;  
  prevLocationsURL: string;
  pokedex: Record<string, Pokemon>   
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
    });

    const commands = getCommands();

    return {
    rl,
    commands,
    pokeAPI: new PokeAPI(10000),
    nextLocationsURL: "",
    prevLocationsURL: "",
    pokedex: {}
    };
}