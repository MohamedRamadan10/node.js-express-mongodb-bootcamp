"use strict";

const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
   // #1
   //    fs.readFile("test-file.txt", (err, data) => {
   //       if (err) console.log(err);
   //       res.end(data);
   //    });
   // #2
   //    const readable = fs.createReadStream("tesst-file.txt");
   //    readable.on("data", (chunk) => res.write(chunk));
   //    readable.on("end", () => res.end());
   //    readable.on("error", () => {
   //       res.write("File is not found");
   //       res.statusCode = 500;
   //       res.end();
   //    });
   //    #3
   const readable = fs.createReadStream("test-file.txt");
   readable.pipe(res);
   /* readableSource.pipe(writeableDest) */
});

server.listen(8000, "127.0.0.1", () => console.log("Waiting for request...."));
