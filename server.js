import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import artistRoutes from "./routes/artists.js";
import commentRoutes from "./routes/comments.js";
import projectRoutes from "./routes/projects.js";

const app = express();
// connect to DB
connectDB();

// Init middleware
app.use(
  express.json({
    extended: false,
  })
);

app.use(cors());

app.get("/", (req, res) =>
  res.json({
    msg: "Welcome to the Voice Artist DB API",
  })
);

// defining routes
app.use("/api/artists", artistRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/projects", projectRoutes);

let port = process.env.PORT;

if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => {
  console.log(`ArtistDB server started successfully in port ${port}`);
});
