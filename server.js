const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const upComingTreks = require("./schema/upComingTreks");
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => console.log("Server Started"));
app.use(cors());

app.get("/hi", (req, res) => {
    res.json("heyy travellers");
});

app.get("/getTrek", async (req, res) => {
    try {
        const user = await upComingTreks.find({}, {
            id: 1,
            name: 1,
            duration: 1,
            price: 1,
            date: 1,
            thumbnailUrl: 1,
            location: 1
            });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/trek/:id", async (req, res) => {
    try {
        const user = await upComingTreks.find({ id : req.params.id});
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

if(process.env.NODE_ENV == "production")
{
    app.use(express.static("client/build"));
    // const path = require("path");
    // app.get("*", (req, res)  => {
    //     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    // })
}