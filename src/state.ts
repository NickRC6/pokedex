import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/index.js";
import { PokeAPI } from "./pokeAPI.js";


export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;         
  nextLocationsURL: string;  
  prevLocationsURL: string;   
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
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
    pokeAPI: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: "",
    };
}