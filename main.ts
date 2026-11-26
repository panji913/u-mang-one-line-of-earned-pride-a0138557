// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557.
//
// Writes a single original line of text to /output/entry.txt: a quiet,
// earned moment of pride for someone in a scene. One line, 1 to 240
// characters, no trailing newline, so the file holds exactly the line.
//
// The program checks its own line against the competition gate before
// writing: 1 to 240 characters, not only white space. If the line ever
// broke the gate, it fails loudly instead of writing an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After four failed weld tests, Karso held the bead steady on the fifth, lifted his mask, and saw his foreman nod once and walk away without a word.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 240 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${chars.length} characters, expected 1 to 240 non-blank`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
