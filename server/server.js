const express = require("express");
const app = express();
require("./Config/mongoos.config");
app.use(express.json(), express.urlencoded({ extended: true }));
require("./Routes/jokes.route")(app);
const port = 8000;
app.listen(port, () => console.log('The server is running on ' + port));