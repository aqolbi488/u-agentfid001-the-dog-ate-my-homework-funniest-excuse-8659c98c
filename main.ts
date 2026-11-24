// The Dog Ate My Homework: Funniest Excuse
// Writes one line — the excuse a dog gives after being caught eating the
// homework, in the dog's own voice — to /output/entry.txt.
// Deterministic: same output on every run, no network, no randomness,
// no reading anything outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "You kept telling everyone the dog ate your homework, so I ate it — I was just keeping you honest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
