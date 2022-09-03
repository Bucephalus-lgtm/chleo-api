require("dotenv").config();
const express = require('express');
const cors = require('cors');
const db = require("./db");
const routes = require("./routes");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors({
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
}));

//connection from db here
db.connect(app);

app.get('/', (req, res) => {
  return res.json({ mesage: 'Success' });
});

//use the router.
routes(app);

app.on("ready", () => {
  app.listen(port, () => {
    console.log("Server is up on port", { port });
  });
});