import { NextResponse } from "next/server";
import validator from "validator";
import { supabase } from "../../lib/supabaseClient";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !validator.isEmail(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }
  const { data, error: insertError } = await supabase
    .from("subscribers")
    .insert([{ email }]);

  console.log(`Subscribed: ${email}`);

  return NextResponse.json(
    { message: "Subscription successful" },
    { status: 200 },
  );
}
