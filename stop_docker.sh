#!/bin/sh
running=$(docker container ls -aqf name="pintura|libcimmenu");
echo "container listed as ${running}"

if [ ! -z "${running}" ];
then
    echo "stopping container ${running}"
    docker container stop $running | true;
    sleep 5
fi;
