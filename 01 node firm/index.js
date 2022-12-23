"use strict";

const fs = require("fs");
// Files
/*
// Blocking - Synchronous
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avocado ${textIn}.\n Created at ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

// Non-Blocking, Asynchronous
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
	if (err) return console.log("Error 💥!!");
	fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
		console.log(data2);
		fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
			console.log(data3);

			fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, (err) =>
				console.log("Your file has been written!!🙂")
			);
		});
	});
});
console.log("will file read!!");
*/

// Server
const http = require("http");
const url = require("url");

// Top level block code that run once at the begin (Synchronous)
const replaceTemplate = require("./modules/replaceTemplate");
const tempOverview = fs.readFileSync(
	`${__dirname}/templates/template-overview.html`,
	"utf-8"
);
const tempCard = fs.readFileSync(
	`${__dirname}/templates/template-card.html`,
	"utf-8"
);
const tempProduct = fs.readFileSync(
	`${__dirname}/templates/template-product.html`,
	"utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
	const { query, pathname } = url.parse(req.url, true);
	console.log(query);

	if (pathname === "/" || pathname === "/overview") {
		res.writeHead(200, { "content-type": "text/html" });

		const cardHTML = dataObj
			.map((el) => replaceTemplate(tempCard, el))
			.join("");
		const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardHTML);

		res.end(output);
	} else if (pathname === "/product") {
		res.writeHead(200, { "content-type": "text/html" });

		const product = dataObj[query.id];
		const output = replaceTemplate(tempProduct, product);

		res.end(output);
	} else if (pathname === "/api") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(data);
	} else {
		res.writeHead(404, {
			"content-type": "text/html",
		});
		res.end("<h1>Page is not found</h1>");
	}
});
server.listen(8000, "127.0.0.1", () =>
	console.log("Listening to requests on port 8000")
);
