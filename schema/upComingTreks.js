const mongoose = require("mongoose");

const upComingTreksSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
        },
        location: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        priceFrom: {
            type: Number,
            required: true,
        },
        priceTo: {
            type: Number,
            required: true,
        },
        batchSize: {
            type: Number,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        trekItinerary: {
            type: Array,
        },
        tourItinerary: {
            type: Object,
        },
        included: {
            type: Array,
        },
        excluded: {
            type: Array,
        },
        difficulty: {
            type: Number,
        },
        feedbacks: {
            type: Array,
        },
        thingsToCarry: {
            type: Number,
        },
        pickupLocations: {
            type: Array,
        },
        highlights: {
            type: Array,
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model("treks", upComingTreksSchema);
