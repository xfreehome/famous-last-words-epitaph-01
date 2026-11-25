import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Here lies Paul. He died as he lived: mid-sentence, refusing to shut\u2014";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
