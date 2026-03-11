import express from "express";
import envConfig from "./config/dotenv.js";
import router from "./routers/index.js";
import db from "./config/database.js";

const app = express();
const port = envConfig.PORT || 3000;

app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
  console.log(`http://localhost:${port}`);
});
