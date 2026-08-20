import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
