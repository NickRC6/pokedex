import { State } from "./state.js";

export function cleanInput(sentenceInput: string): string[] {
    return sentenceInput.trim().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {

    state.rl.prompt()

    state.rl.on("line", (line) => {
        if (line == "") {
            state.rl.prompt();
            return;
        }
        const words = cleanInput(line);
        const command = state.commands[words[0]];
        if (!command) {
            console.log("Unknown command");
            state.rl.prompt();
            return;
        }
        command.callback(state);
        state.rl.prompt();
    });
}

