# URL benchmarks in JavaScript

Requirement: We assume that have macOS or Linux. Windows is not supported.

We need `unzip`. Under Linux, you may install it with `sudo apt-get install unzip` or related commands.

Run the bash script `script.sh` (e.g., type `bash script.sh`). It will install `nvm`, `deno` and `bun` in your user account, if needed. It will also download the data files as needed. Please be patient when you first run the script as it may do a lot of setting up.


## Sample Results

```
cpu: AMD EPYC 7262 8-Core Processor
runtime: deno 1.32.5 (x86_64-unknown-linux-gnu)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt     180.57 ms/iter (178.65 ms … 182.54 ms) 180.86 ms 182.54 ms 182.54 ms
kasztp.txt           57.13 ms/iter   (56.78 ms … 57.38 ms)  57.24 ms  57.38 ms  57.38 ms
userbait.txt            20 ms/iter   (19.94 ms … 20.37 ms)  20.01 ms  20.37 ms  20.37 ms
top100.txt          151.74 ms/iter  (149.6 ms … 152.42 ms) 152.12 ms 152.42 ms 152.42 ms
wikipedia_100k.txt  105.32 ms/iter (104.59 ms … 106.05 ms) 105.67 ms 106.05 ms 106.05 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%
cpu: AMD EPYC 7262 8-Core Processor
runtime: bun 0.5.9 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt      97.16 ms/iter  (93.12 ms … 105.37 ms)  97.13 ms 105.37 ms 105.37 ms
kasztp.txt           43.67 ms/iter   (42.07 ms … 56.44 ms)  43.42 ms  56.44 ms  56.44 ms
userbait.txt         13.47 ms/iter   (12.58 ms … 26.06 ms)  13.49 ms  26.06 ms  26.06 ms
top100.txt          125.69 ms/iter (123.36 ms … 135.54 ms) 125.79 ms 135.54 ms 135.54 ms
wikipedia_100k.txt   73.24 ms/iter   (66.69 ms … 90.79 ms)  77.68 ms  90.79 ms  90.79 ms
Average URL size: 61 bytes
Ratio of bad URLs: 0.02%
Now using node v16.20.0 (npm v8.19.4)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v16.20.0 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt        627 ms/iter (626.11 ms … 628.77 ms) 627.59 ms 628.77 ms 628.77 ms
kasztp.txt          194.71 ms/iter (193.78 ms … 195.52 ms) 195.19 ms 195.52 ms 195.52 ms
userbait.txt         50.88 ms/iter    (50.59 ms … 51.3 ms)  50.94 ms   51.3 ms   51.3 ms
top100.txt          473.86 ms/iter (471.38 ms … 477.07 ms) 474.84 ms 477.07 ms 477.07 ms
wikipedia_100k.txt  392.78 ms/iter (390.77 ms … 397.85 ms) 392.75 ms 397.85 ms 397.85 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%
Now using node v17.9.1 (npm v8.11.0)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v17.9.1 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt     572.93 ms/iter (571.49 ms … 576.32 ms) 573.67 ms 576.32 ms 576.32 ms
kasztp.txt           149.4 ms/iter (148.51 ms … 149.98 ms) 149.57 ms 149.98 ms 149.98 ms
userbait.txt         39.94 ms/iter   (39.53 ms … 40.69 ms)  40.08 ms  40.69 ms  40.69 ms
top100.txt          375.17 ms/iter (373.59 ms … 377.73 ms) 375.97 ms 377.73 ms 377.73 ms
wikipedia_100k.txt   294.4 ms/iter (293.69 ms … 296.05 ms) 294.54 ms 296.05 ms 296.05 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%
Now using node v18.16.0 (npm v9.5.1)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v18.16.0 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt     318.21 ms/iter (315.59 ms … 320.53 ms) 318.72 ms 320.53 ms 320.53 ms
kasztp.txt           88.99 ms/iter   (88.31 ms … 90.21 ms)  89.23 ms  90.21 ms  90.21 ms
userbait.txt         23.94 ms/iter   (23.68 ms … 24.52 ms)  24.12 ms  24.52 ms  24.52 ms
top100.txt          213.52 ms/iter (212.81 ms … 214.69 ms) 213.91 ms 214.69 ms 214.69 ms
wikipedia_100k.txt  174.35 ms/iter (173.98 ms … 174.83 ms) 174.51 ms 174.83 ms 174.83 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%
Now using node v20.0.0 (npm v9.6.4)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v20.0.0 (x64-linux)

benchmark               time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------- -----------------------------
linux_files.txt      90.44 ms/iter   (89.41 ms … 91.29 ms)  90.78 ms  91.29 ms  91.29 ms
kasztp.txt           30.03 ms/iter   (29.57 ms … 30.33 ms)  30.21 ms  30.33 ms  30.33 ms
userbait.txt          8.25 ms/iter      (8.12 ms … 8.8 ms)   8.29 ms    8.8 ms    8.8 ms
top100.txt           67.16 ms/iter   (66.44 ms … 67.59 ms)  67.35 ms  67.59 ms  67.59 ms
wikipedia_100k.txt   56.64 ms/iter   (56.28 ms … 57.02 ms)  56.78 ms  57.02 ms  57.02 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.03%
```
