const { mongoose } = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1/QuanLyMuonSach").then(() => console.log("Connected DB!!!"));
    } catch {
        console.log("Connect Failed");
        console.log(err);
    }
}

module.exports = { connect };