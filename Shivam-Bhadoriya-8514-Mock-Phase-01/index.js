import express from "express";
import envConfig from "./config/dotenv.js";
import router from "./routers/index.js";
import db from "./config/db.js";
import morgan from "morgan";

const app = express();
const port = envConfig.PORT || 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'));
app.use(morgan('dev'));
app.use(router);

app.listen(port, (err) => {
  if (!err) {
    console.log("App listening on port!" + port);
    console.log(`http://localhost:${port}/`);
  } else {
    console.log(err.message);
  }
});
