"use strict";

const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
   return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
         if (err) reject("I could not find that file 😣");
         resolve(data);
      });
   });
};

const writeFilePro = (file, data) => {
   return new Promise((resolve, reject) => {
      fs.writeFile(file, data, (err) => {
         if (err) return reject("Could not write file!!!");
         resolve("success");
      });
   });
};

const getDogPic = async () => {
   try {
      const data = await readFilePro(`${__dirname}/dog.txt`);
      console.log(`Breed: ${data}`);

      //   const res = await superagent.get(
      //      `https://dog.ceo/api/breed/${data}/images/random`
      //   );
      const res1 = superagent.get(
         `https://dog.ceo/api/breed/${data}/images/random`
      );
      const res2 = superagent.get(
         `https://dog.ceo/api/breed/${data}/images/random`
      );

      const all = await Promise.all([res1, res2]);
      const imgs = all.map((el) => el.body.message);
      console.log(imgs);
      //   await writeFilePro("dog-img.txt", res.body.message);
      await writeFilePro("dog-img.txt", imgs.join("/n"));
   } catch (err) {
      console.log(err);
      throw err;
   }

   return "2: Ready 🐶";
};

(async () => {
   try {
      console.log("1: Will get dog pic!");
      const x = await getDogPic();
      console.log(x);
      console.log("3: Done getting dog pic!");
   } catch (err) {
      console.log("Error 💣");
   }
})();

// console.log("1: Will get dog pic!");
// getDogPic()
//    .then((x) => {
//       console.log(x);
//       console.log("3: Done getting dog pic!");
//    })
//    .catch((err) => console.log("Error 💣"));

// readFilePro(`${__dirname}/dog.txt`)
//    .then((result) =>
//       superagent.get(`https://dog.ceo/api/breed/${result}/images/random`)
//    )
//    .then((res) => writeFilePro("dog-img.txt", res.body.message))
//    .catch((err) => console.log(err.message));

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//    superagent
//       .get(`https://dog.ceo/api/breed/${data}/images/random`)
//       .then((res) => {
//          fs.writeFile("dog-img.txt", res.body.message, (err) => {
//             if (err) return console.log(err.message);
//          });
//       })
//       .catch((err) => console.log(err.message));
// });
