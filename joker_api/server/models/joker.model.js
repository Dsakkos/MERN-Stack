const mongoose = require("mongoose");

const JokerSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    { timestamps: true }
);

const Joker = mongoose.model("Joker", JokerSchema);

module.exports = Joker;