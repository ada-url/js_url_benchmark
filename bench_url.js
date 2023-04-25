"use strict";

import { bench, run } from "mitata";
import { existsSync, createWriteStream, readFileSync, mkdirSync } from "node:fs";
import axios from "axios";

const fixturesFolderPath = new URL('fixtures', import.meta.url).pathname;
const urls = [
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/files/linux_files.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/others/kasztp.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/others/userbait.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/top100/top100.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/wikipedia/wikipedia_100k.txt",
];

function get_filename(url) {
  return `fixtures/${url.substring(url.lastIndexOf("/") + 1)}`;
}

async function downloadFile(url) {
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream",
  });

  response.data.pipe(createWriteStream(get_filename(url)));

  return new Promise((resolve, reject) => {
    response.data.on("end", () => {
      resolve();
    });

    response.data.on("error", (err) => {
      reject(err);
    });
  });
}

if (!existsSync(fixturesFolderPath)) {
  mkdirSync(fixturesFolderPath)
}
const urls_for_download = urls.filter(url => !existsSync(get_filename(url)))
const all_promises = urls_for_download.map((url) => downloadFile(url));
await axios.all(all_promises);

let length = 0;
let bad_url = 0;
let good_url = 0;

for (let url of urls) {
  const filename = get_filename(url);
  const file_content = readFileSync(filename, "utf-8");
  const lines = file_content.split("\n");

  bench(filename, () => {
    for (let i = 0; i < lines.length; i++) {
      try {
        length += new URL(lines[i]).href.length;
        good_url++;
      } catch (e) {
        bad_url++;
      }
    }
    return length;
  });
}

await run();

console.info("Average URL size: " + Math.round(length / good_url) + " bytes");
console.info(
  "Ratio of bad URLs:",
  `${Math.round((bad_url / (good_url + bad_url)) * 10000) / 100}%`,
);
