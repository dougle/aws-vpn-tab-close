#!/bin/bash

cd "$(dirname "$0")"

zip $(basename $PWD) icons/* scripts/* manifest.json

exit 0