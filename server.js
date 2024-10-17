const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 8084");
  });
  app.get ("/",(req,res)=>{
    res.status(200).send("Test default page");
  })
  app.get("/health", (req, res, next) => {
    res.status(200).send("Hello!");
  });