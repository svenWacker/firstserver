// console.log("hello");
require("dotenv").config();
const http = require("http");
const PORT = process.env.PORT || 8000;

const express = require("express");
const ourServer = express();

ourServer.listen(PORT, () =>
  console.log(`server up and running on port=${PORT}`)
);
ourServer.get("/", function (req, res) {
  res.send(`you aee connected to the www`);
});

// building the test route
// ourServer.get("/smiley/:id", function (req, res) {
//   const smileyArr = ["😃", "😎", "😻", "😇"];
//   if (req.params.id > 3)
//     return res.send(`Please take a number between 0 and 3 `);
//   else res.send(`your smiley is: ${smileyArr[req.params.id]}`); // params ==> :
// });

const data = require("./data/data.json");
ourServer.get("/smiley/:id", function (req, res) {
  if (req.params.id > data.length - 1)
    return res.send(`Please take a number between 0 and ${data.length - 1}`);
  else
    res.send(
      `${data[req.params.id].name} lives in ${
        data[req.params.id].location
      } with smiley${data[req.params.id].smiley}`
    );
});
