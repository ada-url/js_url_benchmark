#!/bin/bash
source ~/.nvm/nvm.sh

if ! $(command -v nvm &> /dev/null); then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  source ~/.nvm/nvm.sh
fi 

if ! $(command -v bun &> /dev/null); then
  curl -fsSL https://bun.sh/install | bash
  export BUN_INSTALL="$HOME/.bun"
  export PATH="$BUN_INSTALL/bin:$PATH"
fi 

if ! $(command -v deno &> /dev/null); then
  curl -fsSL https://deno.land/x/install/install.sh | sh
  export DENO_INSTALL="$HOME/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
fi 

for version in 16 17 18.15 18.16 20; do
  nvm install $version 
done
npm install
current_node_version=$(nvm current)

function cleanup {
  echo "Restauring node version to $current_node_version"
  nvm use $current_node_version
}

trap cleanup EXIT
deno run -A bench_url.js
bun run bench_url.js
for version in 16 17 18.15 18.16 20; do
  nvm use  $version
  node bench_url.js
done


