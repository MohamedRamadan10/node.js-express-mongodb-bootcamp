"use strict";

const eventEmitter = require("events");

// const cusEmitter = new eventEmitter();

class Sales extends eventEmitter {
   constructor() {
      super();
   }
}

const cusEmitter = new Sales();

cusEmitter.on("newSale", () => console.log("There was a new sale"));

cusEmitter.on("newSale", () => console.log("Customer name: Mohamed"));

cusEmitter.on("newSale", (stock) =>
   console.log(`There are now ${stock} items left in stock`)
);

cusEmitter.emit("newSale", 10);

/////////////////////////////////////////////////
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
   console.log("Request received");
   console.log(req.url);
   res.end("Request received");
});

server.on("request", (req, res) => {
   console.log("Request received 😃");
});

server.on("close", () => console.log("Server closed"));

server.listen(8000, "127.0.0.1", () => console.log("Waiting for request...."));
