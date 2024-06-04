import { setOutput, setFailed, getInput } from "@actions/core";
import { context } from "@actions/github";

async function main() {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = getInput("who-to-greet");

  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toTimeString();

  setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context.payload, undefined, 2);
  // context.repo;
  // context.actor;
  // context.action;
  // context.workflow;

  console.log(`The event payload: ${payload}`);
}

main().catch((error: unknown) => {
  if (error instanceof Error) {
    setFailed(error.message);
    return;
  }
  setFailed("An unexpected error occurred");
});
