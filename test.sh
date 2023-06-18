#!/bin/zsh

echo "SCRAPING"

npx playwright test

convert \
  -resize 540x960 \
  -quality 88 \
  -density 120 \
  -units PixelsPerInch \
  -sampling-factor 4:2:0 \
  -colorspace sRGB \
  -strip \
  -define colorspace:auto-grayscale=false \
  -type truecolor \
  screenshot.png ./web/output.jpg

rm screenshot.png
