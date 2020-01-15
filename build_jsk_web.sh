emcc jsk_web.c -o image_web.js \
  -s EXPORTED_FUNCTIONS='["_process_jpg"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
