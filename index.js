const fs = require("fs");
const youtubedl = require("youtube-dl");
const video = youtubedl(
  "https://www.youtube.com/watch?v=cjONzZPJONc",
  ["--format=18"],
  { cwd: __dirname }
);

video.on("info", function (info) {
  console.log("Baixando...");
  console.log("filename: " + info._filename);
  console.log("size: " + info.size);
});

video.pipe(fs.createWriteStream("myvideo.mp4"));
