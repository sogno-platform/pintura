#!/bin/bash

usage (){
  echo "usage: npm run mockNpmInstall -- -d /dest/directory"
}

accept=false
while getopts "d:" arg; do
  case $arg in
    d)
      accept=true
      echo "ARGUMENT: -$arg $OPTARG" 
      LIBCIMSVG='cimsvg/lib/libcimsvg.cjs.js'
      if [ -f "$LIBCIMSVG" ]; then
        if [ -d "$OPTARG" ]; then
          LIBCIMSVGDEST="$OPTARG/libcimsvg.js"
          echo cp "$LIBCIMSVG" "$LIBCIMSVGDEST"
          cp "$LIBCIMSVG" "$LIBCIMSVGDEST"
          echo cp npm/package.json "$OPTARG"
          cp npm/package.json "$OPTARG"
        else
          echo "$OPTARG does not exist! Perhaps you need to create it using mkdir?"
        fi
      else
        echo "$LIBCIMSVG does not exist! Have you built the library using 'npm run build' yet?"
      fi
      ;;
  esac
done

if [ "x$accept" != "xtrue" ]; then
  usage;
fi
