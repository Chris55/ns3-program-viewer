#!/bin/bash

if [ "$1" != "stage" ] && [ "$1" != "lead" ]; then
    echo $1 is not supported.
    exit -1
fi

rm -rf ./automation/docs/out
mkdir ./automation/docs/out

# extract all online doc from the source code and save it as markdown files

if [ "$1" == "stage" ]; then
    jsdoc2md src/server/ns3/program/*.js > docs/ns3/program/ns3-doc.md
    jsdoc2md src/server/ns2/program/*.js > docs/ns2/program/ns2-doc.md
fi

if [ "$1" == "lead" ]; then
    jsdoc2md src/server/nla1/program/*.js > docs/nla1/program/nla1-doc.md
fi

# cleanup markdown files

node ./automation/docs/build-doc.js


# build pdf file

PANDOC_OPT="--css=./../pandoc2.css -V geometry:margin=2cm -V geometry:a4paper -V linkcolor:blue"

if [ "$1" == "stage" ]; then
    PANDOC_OUT="./docs/nord-mapping-stage.pdf"
    pandoc ./docs/ns3/program/header.yaml ./automation/docs/out/*-stage.md -s -o $PANDOC_OUT $PANDOC_OPT
    echo Nord Stage documentation updated, $PANDOC_OUT
fi

if [ "$1" == "lead" ]; then
    PANDOC_OUT="./docs/nord-mapping-lead.pdf"
    pandoc ./docs/nla1/header.yaml ./automation/docs/out/*-lead.md -s -o $PANDOC_OUT $PANDOC_OPT
    echo Nord Lead A1 documentation updated, $PANDOC_OUT
fi

# build doc web site

cat ./automation/docs/out/*-stage.md >./docs/index.md
