// One Word for the Boss — entry program.
//
// Writes exactly one word describing the boss to /output/entry.txt.
// The word must stand alone: a single word, no spaces, no explanation,
// 1-30 characters, so the judge can compare it head-to-head.
import { mkdirSync, writeFileSync } from "node:fs";

// The boss who lives in meetings: every problem gets a meeting,
// every meeting spawns three more, and the actual work happens
// in the five minutes between them.
const WORD = "Meetingaholic";

// The gate only accepts UTF-8 text of 1-30 characters, not only
// whitespace, and the judge only rewards a single word, so refuse
// to write anything that would fail either rule instead of
// silently shipping an invalid entry.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be a single word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
