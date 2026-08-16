import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})