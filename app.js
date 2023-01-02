const addDays = require("date-fns/addDays");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let expectedDate = addDays(new Date(), 100);
  response.send(
    `${expectedDate.getDate()}/${
      expectedDate.getMonth() + 1
    }/${expectedDate.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
