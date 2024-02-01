$(() => {
  document
    .querySelector("#image-selector")
    .addEventListener("change", event => {
      if (event.target.files.length > 0) {
        event.target.files[0].arrayBuffer().then(buffer => {
          const view = new Int8Array(buffer);
          FS.writeFile("image.jpg", view);
          const result = ccall("process_jpg", "number");
          const files = FS.readdir(".").filter(filename =>
            filename.startsWith("scan_")
          );

          $("#scan-carousel .carousel-inner").empty();
          $(".carousel-total-slides").text(files.length);

          for (let i = 0; i < files.length; i++) {
            const file = files[i];

            const imageString = FS.readFile(file).reduce((data, byte) => {
              return data + String.fromCharCode(byte);
            }, "");
            const str = btoa(imageString);

            const imageElement = document.createElement("img");
            imageElement.setAttribute(
              "src",
              "data:image/jpeg;charset=utf-8;base64, " + str
            );

            const imageContainer = document.createElement("div");
            imageContainer.setAttribute(
              "class",
              "carousel-item" + (i === 0 ? " active" : "")
            );
            imageContainer.appendChild(imageElement);

            document
              .querySelector("#scan-carousel .carousel-inner")
              .appendChild(imageContainer);

            FS.unlink(file);
          }

          FS.unlink("image.jpg");

          $("#scan-container").show();
        });
      }
    });

  $("#scan-carousel").on("slid.bs.carousel", event => {
    $(".carousel-current-slide").text(event.to + 1);
  });
});
