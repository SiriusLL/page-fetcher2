const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

const fetchAndSave = function (url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Failed to download resource: ", error);
      return;
    }

    // Optional: it's ok if students dont bother checking the http response code for this excercise.

    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log("Failed to write to localPath: ", localPath);
      } else {
        console.log(
          `Downloaded and saved ${body.length} bytes to ${localPath}`
        );
      }
    });
  });
};

if (!url || !localPath) {
  console.log("Two parameters required...");
  console.log("Usage: node fetcherjs <url> <local-path>");
} else {
  fetchAndSave(url, localPath);
}
