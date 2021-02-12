import express from "express";
import routes from "./routes";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { variable } from "utils";
// Create a new express application instance
const app: express.Application = express();
mongoose.connect(variable.MONGO_HOST);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

app.use(bodyParser.json());
app.use(cors());
app.use(routes);
