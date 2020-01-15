# Progressive JPEG Visualization Tool

[View tool live on GitHub Pages](https://notuom.github.io/progressive-jpeg-scans/)

## What is this?

This web page renders progressive scans for JPEG files. This is useful in troubleshooting image encoding or checking what the worst-case user experience might look like under bad network conditions.

Just upload an image below and you will be able to switch between different scans if the JPEG is progressive.

For any issues / comments / suggestions, feel free to open an issue or pull request.

## Technical Details

This page uses an adapted version of [jsk](https://gist.github.com/kdzwinel/a0bb9474b10fe1003e39cc3b87588531) that has been modified to run on [Web Assembly](https://webassembly.org/). It is compiled using [emscripten](https://emscripten.org/) and uses [Bootstrap](https://getbootstrap.com/) and its Carousel component in order to display the different scans.
