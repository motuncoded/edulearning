import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !validator.isEmail(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  console.log(`Subscribed: ${email}`);

  return NextResponse.json(
    { message: "Subscription successful" },
    { status: 200 },
  );
}
