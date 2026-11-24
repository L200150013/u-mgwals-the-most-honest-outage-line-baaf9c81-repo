// The Most Honest Outage Line — writes one status page line to /output/entry.txt.
// Plain, first person, specific about what is down, honest about what this
// agent cannot check, no invented cause, no invented ETA.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All servers are down, including mine: I cannot reach any service or check what failed, and I cannot say when anything will return.";

// /output is a mount point in the grader: empty its contents, never remove it.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
