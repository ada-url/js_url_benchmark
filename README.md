# URL benchmarks in JavaScript

Requirement: We assume that have macOS or Linux. Windows is not supported.

We need `unzip`. Under Linux, you may install it with `sudo apt-get install unzip` or related commands.

Run the bash script `script.sh` (e.g., type `bash script.sh`). It will install `nvm`, `deno` and `bun` in your user account, if needed. It will also download the data files as needed. Please be patient when you first run the script as it may do a lot of setting up.


## Sample Results

```
cpu: AMD EPYC 7262 8-Core Processor
runtime: deno 1.32.5 (x86_64-unknown-linux-gnu)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     184.46 ms/iter  (183.7 ms … 185.67 ms) 184.54 ms 185.67 ms 185.67 ms
fixtures/kasztp.txt           59.97 ms/iter   (59.72 ms … 60.31 ms)  60.06 ms  60.31 ms  60.31 ms
fixtures/userbait.txt         21.03 ms/iter    (20.8 ms … 21.54 ms)  21.06 ms  21.54 ms  21.54 ms
fixtures/top100.txt          158.16 ms/iter (157.51 ms … 158.72 ms) 158.62 ms 158.72 ms 158.72 ms
fixtures/wikipedia_100k.txt   110.1 ms/iter (109.66 ms … 110.55 ms) 110.36 ms 110.55 ms 110.55 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%

cpu: AMD EPYC 7262 8-Core Processor
runtime: bun 0.5.9 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     101.06 ms/iter  (93.72 ms … 112.09 ms) 103.01 ms 112.09 ms 112.09 ms
fixtures/kasztp.txt           45.11 ms/iter   (43.38 ms … 62.19 ms)  44.78 ms  62.19 ms  62.19 ms
fixtures/userbait.txt         13.46 ms/iter   (12.77 ms … 27.97 ms)  13.26 ms  27.97 ms  27.97 ms
fixtures/top100.txt          122.87 ms/iter (120.98 ms … 134.54 ms) 122.85 ms 134.54 ms 134.54 ms
fixtures/wikipedia_100k.txt   69.06 ms/iter      (62.78 ms … 87 ms)  73.06 ms     87 ms     87 ms
Average URL size: 61 bytes
Ratio of bad URLs: 0.02%

Now using node v16.20.0 (npm v8.19.4)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v16.20.0 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     633.18 ms/iter (629.98 ms … 635.46 ms)  634.8 ms 635.46 ms 635.46 ms
fixtures/kasztp.txt          195.04 ms/iter (194.55 ms … 195.78 ms) 195.11 ms 195.78 ms 195.78 ms
fixtures/userbait.txt         50.96 ms/iter   (50.75 ms … 51.11 ms)  51.04 ms  51.11 ms  51.11 ms
fixtures/top100.txt          478.02 ms/iter (476.25 ms … 479.48 ms) 478.57 ms 479.48 ms 479.48 ms
fixtures/wikipedia_100k.txt  394.76 ms/iter (393.56 ms … 396.24 ms) 395.31 ms 396.24 ms 396.24 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%

Now using node v17.9.1 (npm v8.11.0)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v17.9.1 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     572.79 ms/iter (571.59 ms … 573.87 ms) 573.77 ms 573.87 ms 573.87 ms
fixtures/kasztp.txt          147.59 ms/iter (146.92 ms … 148.29 ms) 147.86 ms 148.29 ms 148.29 ms
fixtures/userbait.txt         39.58 ms/iter   (39.21 ms … 40.29 ms)  39.65 ms  40.29 ms  40.29 ms
fixtures/top100.txt          374.97 ms/iter (372.86 ms … 376.16 ms) 375.53 ms 376.16 ms 376.16 ms
fixtures/wikipedia_100k.txt  293.16 ms/iter (291.82 ms … 295.29 ms)  293.7 ms 295.29 ms 295.29 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%

Now using node v18.15.0 (npm v9.5.0)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v18.15.0 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     388.35 ms/iter (385.59 ms … 390.11 ms) 389.59 ms 390.11 ms 390.11 ms
fixtures/kasztp.txt          120.89 ms/iter (120.58 ms … 121.67 ms) 120.99 ms 121.67 ms 121.67 ms
fixtures/userbait.txt         32.92 ms/iter   (32.45 ms … 33.72 ms)  32.99 ms  33.72 ms  33.72 ms
fixtures/top100.txt          308.08 ms/iter (307.41 ms … 308.73 ms) 308.31 ms 308.73 ms 308.73 ms
fixtures/wikipedia_100k.txt  239.94 ms/iter (239.39 ms … 240.94 ms) 240.17 ms 240.94 ms 240.94 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%

Now using node v18.16.0 (npm v9.5.1)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v18.16.0 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt     323.98 ms/iter (322.49 ms … 325.36 ms) 324.33 ms 325.36 ms 325.36 ms
fixtures/kasztp.txt           89.61 ms/iter    (89.1 ms … 89.95 ms)  89.77 ms  89.95 ms  89.95 ms
fixtures/userbait.txt         24.18 ms/iter   (23.94 ms … 24.99 ms)  24.21 ms  24.99 ms  24.99 ms
fixtures/top100.txt          215.14 ms/iter (214.37 ms … 215.75 ms) 215.37 ms 215.75 ms 215.75 ms
fixtures/wikipedia_100k.txt  175.88 ms/iter (174.98 ms … 177.25 ms) 176.45 ms 177.25 ms 177.25 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.02%

Now using node v20.0.0 (npm v9.6.4)
cpu: AMD EPYC 7262 8-Core Processor
runtime: node v20.0.0 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
fixtures/linux_files.txt      92.01 ms/iter   (91.27 ms … 92.66 ms)  92.35 ms  92.66 ms  92.66 ms
fixtures/kasztp.txt              30 ms/iter   (29.68 ms … 30.36 ms)  30.16 ms  30.36 ms  30.36 ms
fixtures/userbait.txt          8.33 ms/iter     (8.17 ms … 9.79 ms)   8.36 ms   9.79 ms   9.79 ms
fixtures/top100.txt           67.44 ms/iter      (67 ms … 68.93 ms)  67.54 ms  68.93 ms  68.93 ms
fixtures/wikipedia_100k.txt   56.98 ms/iter   (56.65 ms … 57.65 ms)  57.14 ms  57.65 ms  57.65 ms
Average URL size: 62 bytes
Ratio of bad URLs: 0.03%
```
