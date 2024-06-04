"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
async function main() {
    const nameToGreet = (0, core_1.getInput)("who-to-greet");
    console.log(`Hello ${nameToGreet}!`);
    const time = new Date().toTimeString();
    (0, core_1.setOutput)("time", time);
    const payload = JSON.stringify(github_1.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
}
main().catch((error) => {
    if (error instanceof Error) {
        (0, core_1.setFailed)(error.message);
        return;
    }
    (0, core_1.setFailed)("An unexpected error occurred");
});
