const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://sherine2001:Srisheshi3@cluster0.8pccq.mongodb.net/hotelbookingapp";
mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on("error", (err) => {
  console.log("Mongo DB Connection failed"+ err);
});

connection.on("connected", () => {
  console.log("connected successfully");
});

module.exports = connection;
