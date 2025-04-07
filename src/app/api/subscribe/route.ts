import { NextResponse } from "next/server";
import validator from "validator";
import { supabase } from "../../lib/supabaseClient";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  const { error: insertSubscriberError } = await supabase
    .from("subscribers")
    .insert([{ email }]);

  if (insertSubscriberError) {
    return NextResponse.json(
      { message: "Failed to subscribe" },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: "Subscribed successfully" },
    { status: 200 },
  );
}
