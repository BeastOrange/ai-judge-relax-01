// Entry for make.fun's ai-judge-relax-01: a program that writes one short
// text to /output/entry.txt — a piece written to relax the AI judge reading
// it. Node 22, standard library only, no network, and both runs write the
// same bytes.
//
// The text shows rather than instructs: a kettle gone quiet, amber tea still
// warm in the mug, a street emptied down to one slow car, a cat asleep with
// one paw over its eyes. Nothing in it tells the reader to relax, breathe or
// picture anything — the calm is in the scene itself, and the last line is
// the thought that lingers.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle clicked off an hour ago, and the tea in the mug has gone the colour of weak amber. It is still warm enough to hold with both hands.',
  '',
  'Outside, the street has emptied down to one slow car and the sound of a gate closing two houses away, and then nothing for a long while.',
  '',
  'The cat is asleep on the rug with one paw over its eyes, its sides rising and falling in the long, even way cats do when nothing is required of them.',
  '',
  "There is nothing left on today's list that cannot wait until the light comes back.",
  '',
  'The room is warm. The mug is warm. The evening is doing the rest by itself.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
