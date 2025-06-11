#!/bin/bash

if [ "$1" != "stage" ] && [ "$1" != "lead" ]; then
    echo $1 is not supported.
    exit -1
fi

rm -rf ./doc/out
mkdir ./doc/out

# extract all online doc from the source code and save it as markdown files

if [ "$1" == "stage" ]; then
    jsdoc2md src/server/ns3/program/*.js > doc/ns3/program/ns3-doc.md
    jsdoc2md src/server/ns2/program/*.js > doc/ns2/program/ns2-doc.md
fi

if [ "$1" == "lead" ]; then
    jsdoc2md src/server/nla1/program/*.js > doc/nla1/program/nla1-doc.md
fi

# cleanup markdown files

node ./doc/src/build-doc.js


# build pdf file

PANDOC_OPT="--css=./../pandoc2.css -V geometry:margin=2cm -V geometry:a4paper -V linkcolor:blue"

if [ "$1" == "stage" ]; then
    PANDOC_OUT="./doc/nord-mapping-stage.pdf"
    pandoc ./doc/ns3/program/header.yaml ./doc/out/*-stage.md -s -o $PANDOC_OUT $PANDOC_OPT
    echo Nord Stage documentation updated, $PANDOC_OUT
fi

if [ "$1" == "lead" ]; then
    PANDOC_OUT="./doc/nord-mapping-lead.pdf"
    pandoc ./doc/nla1/header.yaml ./doc/out/*-lead.md -s -o $PANDOC_OUT $PANDOC_OPT
    echo Nord Lead A1 documentation updated, $PANDOC_OUT
fi

# build doc web site

cat ./doc/out/*-stage.md >./doc/index.md
