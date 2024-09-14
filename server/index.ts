// server/index.ts

import express from "express";
import bodyParser from "body-parser";
const fs = require("fs");
const path = require("path");

const app = express();
const filePath = path.join(__dirname, "subscribers.txt");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;

  console.log(`New subscription: ${email}`);
  res.status(200).send(`Subscribed with: ${email}`);
  fs.appendFile(filePath, `${email}\n`, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error("Error writing to file:", err);
      // Send a more specific error response based on the error
      return res.status(500).send(`Subscription failed: ${err.message}`);
    }
    return res.status(200).send(`Subscribed with: ${email}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
