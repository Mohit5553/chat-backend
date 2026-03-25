import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGODB_URI?.trim();

if (!mongoUri) {
  throw new Error(
    "MONGODB_URI is required. Set it to your MongoDB connection string (Atlas, Render managed database, etc.) before starting the server."
  );
}

export const env = {
  port: Number(process.env.PORT || 5000),
  mongoUri,
  jwtSecret: process.env.JWT_SECRET || "change-me",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  widgetPublicUrl: process.env.WIDGET_PUBLIC_URL || (process.env.NODE_ENV === "production" ? "https://chat-backend-3pcj.onrender.com/chat-widget.js" : "http://localhost:5000/chat-widget.js")
};
