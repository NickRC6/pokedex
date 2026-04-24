import { State } from "./state.js";

export function cleanInput(sentenceInput: string): string[] {
    return sentenceInput.trim().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {

    state.rl.prompt()

    state.rl.on("line", async (line) => {
        if (line == "") {
            state.rl.prompt();
            return;
        }
        const words = cleanInput(line);
        const command = state.commands[words[0]];
        const args = words.slice(1);
        if (!command) {
            console.log("Unknown command");
            state.rl.prompt();
            return;
        }
        try {
        await command.callback(state, ...args);
        } catch (err) {
        console.log("Error:", (err as Error).message);
        }
        state.rl.prompt();
    });
}



