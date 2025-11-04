
// Add to top
//* Prometheus Client Setup */
const client = require("prom-client");
const register = new client.Registry();

const express = require("express");
const app = express();


//* Prometheus Metrics Setup *//
// Collect default Node.js metrics
client.collectDefaultMetrics({ register });


// Custom metric: HTTP request duration
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  registers: [register]
});


// Middleware to time requests
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on("finish", () => {
    end({ route: req.route?.path || req.path, code: res.statusCode, method: req.method });
  });
  next();
});


// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

//* Prometheus Metrics Setup - End *//



// Root endpoint
app.get("/", (req, res) => {
  res.send("Testing Observability using Prometheus and Grafana ---> !!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});