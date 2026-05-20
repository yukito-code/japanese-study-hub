/**
 * EDICT2 から scripts/data/kanji-compound-index.json を生成
 * 初回: curl で edict2.gz を scripts/data/ に置くか、本スクリプトが自動取得を試みます
 */
import { mkdirSync, existsSync, writeFileSync, createWriteStream } from "node:fs";
import { get } from "node:https";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildCompoundIndexFromEdictGz,
  COMPOUND_INDEX_PATH,
  EDICT_GZ_PATH,
  EDICT_HEADWORDS_PATH,
} from "./edict-compounds.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

function downloadEdict(dest) {
  return new Promise((resolve, reject) => {
    mkdirSync(dirname(dest), { recursive: true });
    const file = createWriteStream(dest);
    get("http://ftp.edrdg.org/pub/Nihongo/edict2.gz", (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        get(res.headers.location, (r2) => r2.pipe(file));
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

async function main() {
  if (!existsSync(EDICT_GZ_PATH)) {
    console.log("downloading edict2.gz …");
    await downloadEdict(EDICT_GZ_PATH);
  }
  console.log("building compound index …");
  const { index, headwords } = await buildCompoundIndexFromEdictGz(EDICT_GZ_PATH);
  writeFileSync(COMPOUND_INDEX_PATH, JSON.stringify(index));
  writeFileSync(EDICT_HEADWORDS_PATH, JSON.stringify([...headwords].sort()));
  const chars = Object.keys(index).length;
  console.log("wrote", COMPOUND_INDEX_PATH, chars, "kanji keys");
  console.log("wrote", EDICT_HEADWORDS_PATH, headwords.size, "headwords");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
