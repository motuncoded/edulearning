// server/index.ts

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post("/api/subscribe.ts", (req, res) => {
  const { email } = req.body;

  console.log(`New subscription: ${email}`);
  res.status(200).send(`Subscribed with: ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
