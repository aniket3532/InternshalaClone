const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { connect } = require("./db");
const router = require("./Routes");

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from backend /");
})
app.use("/api",router);
connect();


app.listen(port, () => {
    console.log(`server running on ${port}`);
})