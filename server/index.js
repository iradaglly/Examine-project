const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();

// Mongo Db Connection
DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log('Connected!'));



// Mongoose Schema
const Schema = mongoose.Schema;

const HostingSchema = new Schema({
    title: String,
    image: String,
    price: Number
});

const HostingModel = mongoose.model('hosting', HostingSchema);




// Get All
app.get("/platforms", async (req, res) => {
    const { title } = req.query;
    const platforms = await HostingModel.find();
    if (title === undefined) {
        res.status(200).send(platforms)
    }
    else {
        res.status(200).send(platforms.filter(x => {
            x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
        }))

    }
})


// Get by ID
app.get("/platforms/:id", async (req, res) => {
    const id = req.params.id
    const platform = await HostingModel.findById(id);
    if (!platform) {
        res.status(204).send("platfrom not found")
    }
    else {
        res.status(200).send(platform)

    }
})


// Delete
app.delete("/platforms/:id", async (req, res) => {
    const id = req.params.id
    const platform = await HostingModel.findByIdAndDelete(id);
    if (platform === undefined) {
        res.status(404).send("platfrom not found")
    }
    else {
        res.status(203).send(platform)

    }
})

// Post
app.post("/platforms", async (req, res) => {
    const { title, image, price } = req.body;
    const newPlatform = new HostingModel({
        title: title,
        image: image,
        price: price
    })
    await newPlatform.save()
    res.status(201).send("created")
})


PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("NODE APP listening ")
})
