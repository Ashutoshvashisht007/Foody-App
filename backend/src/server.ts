import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Foodzy API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
