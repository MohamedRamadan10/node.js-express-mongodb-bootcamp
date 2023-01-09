"use strict";

const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
	superagent
		.get(`https://dog.ceo/api/breed/${data}/images/random`)
		.then((res) => {
			fs.writeFile("dog-img.txt", res.body.message, (err) => {
				if (err) return console.log(err.message);
			});
		})
		.catch((err) => console.log(err.message));
});
 