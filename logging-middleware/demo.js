import Logger from "./src/index.js";

// Example usage with valid API values
Logger.Log(
  "backend", // stack: "backend" or "frontend"
  "error",   // level: "debug", "info", "warn", "error", "fatal"
  "handler", // package: must be one of the allowed backend packages
  "received string, expected bool" // message
);
