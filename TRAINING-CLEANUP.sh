#!/bin/sh

# This file is on root of the training project
DIR="$(dirname $0)"

# Find all directories to remove to have a clean training from scratch
find $DIR - name node_modules -print


