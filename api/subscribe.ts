import { appendFileSync, readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";

const subscribersCsv = readFileSync(
  join(process.cwd(), "subscribers.csv"),
  "utf-8",
);

const subscribeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const existingSubscriber = subscribersCsv.includes(email);
  if (existingSubscriber) {
    return res.status(400).json({ error: "Email is already subscribed" });
  }
  const newSubscriber = `${email}, ${new Date().toISOString()}\n`;
  appendFileSync(join(process.cwd(), "subscribers.csv"), newSubscriber);
  return res.status(201).json({ message: "Subscription successful" });
};

export default subscribeHandler;
