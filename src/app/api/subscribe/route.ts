import { NextResponse } from "next/server";

const subscribedEmails: string[] = [];

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  if (subscribedEmails.includes(email)) {
    return NextResponse.json(
      { message: "Already subscribed!" },
      { status: 400 },
    );
  }

  subscribedEmails.push(email);
  console.log(`New subscription: ${email}`);

  return NextResponse.json(
    { message: `Thanks for Subscribing` },
    { status: 200 },
  );
}
