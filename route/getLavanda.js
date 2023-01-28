/** @format */

const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const config = require("../config/config");

route.get("/get_all", async (req, res) => {
  await mongoose.connect(config.mongoDB, async (err, db) => {
    if (!db) {
      return res.send("Error");
    }
    db.collection("lavanda_gel")
      .find()
      .toArray((err, result) => {
        return res.send(result);
      });
  });
});

module.exports = route;
