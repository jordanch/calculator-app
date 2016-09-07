#!/bin/bash
# --------------------------------------------------------------------------- #
# Script to build required CSS and HTML artifacts for deployment
# --------------------------------------------------------------------------- #

strCssSrc="src/less"
strCssDst="web/css"

strHtmlSrc="src/jade"
strHtmlDst="web"

# --------------------------------------------------------------------------- #
echo "Compiling CSS .."
for strFile in $(cd $strCssSrc && ls); do
    ./node_modules/less/bin/lessc --verbose $strCssSrc/$strFile $strCssDst/${strFile/.*/.css}
done

# --------------------------------------------------------------------------- #
echo
echo -n "Compiling HTML .."
node_modules/jade/bin/jade.js $strHtmlSrc -P --out $strHtmlDst

# --------------------------------------------------------------------------- #
# END /* vim: set noai nosi nocin et ts=4 sts=4 filetype=sh: */
