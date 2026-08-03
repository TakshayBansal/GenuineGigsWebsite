import { NextResponse } from "next/server";

const limits: Record<string, number> = { name:100, email:200, company:150, role:120, companySize:60, erp:120, challenge:100, message:1500 };
const required = ["name", "email", "company", "role", "companySize", "challenge"];

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message:"Invalid request body." }, { status:400 }); }
  if (typeof body.website === "string" && body.website) return NextResponse.json({ message:"Thanks—your request has been sent." });

  const values: Record<string,string> = {};
  const errors: Record<string,string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    values[key] = value;
    if (value.length > limit) errors[key] = `Please use ${limit} characters or fewer.`;
  }
  for (const key of required) if (!values[key]) errors[key] = "This field is required.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid work email.";
  if (Object.keys(errors).length) return NextResponse.json({ message:"Please check the highlighted fields.", errors }, { status:422 });

  const endpoint = process.env.DEMO_WEBHOOK_URL;
  if (!endpoint) return NextResponse.json({ message:"Demo requests are not configured yet. Please contact GenuineGigs directly." }, { status:503 });
  try {
    const headers: HeadersInit = { "Content-Type":"application/json", "User-Agent":"GenuineGigs-Website/1.0" };
    if (process.env.DEMO_WEBHOOK_TOKEN) headers.Authorization = `Bearer ${process.env.DEMO_WEBHOOK_TOKEN}`;
    const response = await fetch(endpoint, { method:"POST", headers, body:JSON.stringify({ ...values, source:"genuinegigs-website", submittedAt:new Date().toISOString() }), signal:AbortSignal.timeout(8000), cache:"no-store" });
    if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
    return NextResponse.json({ message:"Thanks—your request has been sent. We’ll be in touch shortly." });
  } catch (error) {
    console.error("Demo webhook delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ message:"We could not send your request right now. Please try again shortly." }, { status:502 });
  }
}
