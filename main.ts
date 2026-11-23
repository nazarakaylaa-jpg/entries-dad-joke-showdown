// Dad Joke Showdown — writes one original dad joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// Deterministic: no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Why did I name our dog Bacon? So every morning I can tell the kids I'm bringing home the bacon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
