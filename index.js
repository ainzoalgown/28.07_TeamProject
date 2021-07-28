const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.use(require("./routes/index"));

mongoose
  .connect("mongodb+srv://code:code@cluster0.cnyps.mongodb.net/shop?retryWrites=true&w=majority", {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () =>
      console.log("База данных подключена и приложение работает")
    );
  });
