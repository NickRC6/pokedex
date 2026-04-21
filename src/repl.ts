import readline from "readline";
import { getCommands } from "./commands/index.js";

export function cleanInput(sentenceInput: string): string[] {
    return sentenceInput.trim().split(/\s+/).filter(Boolean);
}

export function startREPL() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
    });

    const commands = getCommands();
    rl.prompt()

    rl.on("line", (line) => {
        if (line == "") {
            rl.prompt();
            return;
        }
        const words = cleanInput(line);
        const command = commands[words[0]];
        if (!command) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }
        command.callback(commands);
        rl.prompt();
    });
}

