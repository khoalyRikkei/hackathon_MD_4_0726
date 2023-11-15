const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
require("dotenv/config");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

const PORT = process.env.PORT || 3111;
app.listen(PORT, () => {
  console.log(`Connecting to port http://localhost:${PORT}`);
});

//
