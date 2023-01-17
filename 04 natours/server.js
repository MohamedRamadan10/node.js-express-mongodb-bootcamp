const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB.replace("<Password>", process.env.DB_PASSWORD);

mongoose.set("strictQuery", true);
mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const app = require("./app");

const port = process.env.Port || 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));
