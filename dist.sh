#!/usr/bin/env bash

set -e
DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -a
. ../conf/npm.env
set +a
set -x

echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >.npmrc

npm publish --access public
