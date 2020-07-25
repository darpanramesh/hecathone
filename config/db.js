const mongoose = require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
 
});

module.exports = mongoose;
