"use strict";

import { bench, run } from "mitata";
import { existsSync, createWriteStream, readFileSync } from "node:fs";
import axios from "axios";

var urls = [
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/files/linux_files.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/others/kasztp.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/others/userbait.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/top100/top100.txt",
  "https://raw.githubusercontent.com/ada-url/url-various-datasets/main/wikipedia/wikipedia_100k.txt",
];

function get_filename(url) {
  return url.substring(url.lastIndexOf("/") + 1);
}

const downloadFile = async (url) => {
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
};

async function download(urls) {
  const urls_for_download = urls.filter((url) => {
    return !existsSync(get_filename(url));
  });
  var all_promises = urls_for_download.map((url) => downloadFile(url));
  return axios.all(all_promises);
}

await download(urls);

async function download_and_run(filename, url) {
  if (existsSync(filename)) {
    run_bench(filename);
  } else {
    get(url, (res) => {
      const file = createWriteStream(filename);
      res.pipe(file);
      file.on("error", (err) => {
        console.error(err);
      });
      file.on("finish", async () => {
        file.close();
        run_bench(filename);
      });
    });
  }
}

var length = 0;
var bad_url = 0;
var good_url = 0;

async function run_bench(urls) {
  for (let url of urls) {
    const filename = get_filename(url);
    const file_content = readFileSync(filename, "utf-8");
    const lines = file_content.split("\n");

    bench(filename, () => {
      for (var i = 0; i < lines.length; i++) {
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
}

await run_bench(urls);

console.log("Average URL size: " + Math.round(length / good_url) + " bytes");
console.log(
  "Ratio of bad URLs: " +
    Math.round((bad_url / (good_url + bad_url)) * 10000) / 100.0 +
    "%"
);
