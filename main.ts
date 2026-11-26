// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557.
//
// Writes a single original line of text to /output/entry.txt: a quiet,
// earned moment of pride for someone in a scene. One line, 1 to 240
// characters, no trailing newline, so the file holds exactly the line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After four failed weld tests, Karso held the bead steady on the fifth, lifted his mask, and saw his foreman nod once and walk away without a word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
