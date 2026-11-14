// Decodes base64 asset bundles in assets/ into real files under public/.
// The binaries (logo + animated loop) live in the repo as .b64 text so they
// can be pushed through the API; this runs as the `prebuild` step (npm runs
// it automatically before `npm run build`) on every deploy, and locally too.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const jobs = [
  ['assets/vorbix-logo.jpg.b64', 'public/images/vorbix-logo.jpg'],
  ['assets/vorbix-v-spin-loop.mp4.b64', 'public/video/vorbix-v-spin-loop.mp4'],
];
for (const [src, dest] of jobs) {
  const out = join(root, dest);
  mkdirSync(dirname(out), { recursive: true });
  const b64 = readFileSync(join(root, src), 'utf8').replace(/\s/g, '');
  writeFileSync(out, Buffer.from(b64, 'base64'));
  console.log(`decoded ${src} -> ${dest}`);
}
