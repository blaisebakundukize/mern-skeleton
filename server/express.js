import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/user.routers";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Handle auth-related errors thrown by express-jwt (error name: 'UnauthorizedError') when it tries to validate JWT tokens in incoming requests
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      error: err.name + ": " + err.message,
    });
  } else if (err) {
    res.status(400).json({
      error: err.name + ": " + err.message,
    });
  }
});

app.use("/", userRoutes);
app.use("/", authRoutes);

export default app;
