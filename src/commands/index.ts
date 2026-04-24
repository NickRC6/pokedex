import type { CLICommand } from "../state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex.",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message.",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Shows 20 locations.",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Shows the previous 20 locations.",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explores a location.",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Attempts to catch a Pokemon.",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspects an already-owned Pokemon.",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Check all registered Pokemon in the Pokedex.",
      callback: commandPokedex,
    },
  };
}