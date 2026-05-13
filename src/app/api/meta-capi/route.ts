import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CAPI_TOKEN = process.env.META_CAPI_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, event_source_url, custom_data } = body;

    if (!event_name) {
      return NextResponse.json({ error: "event_name requerido" }, { status: 400 });
    }

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: event_source_url || "",
          user_data: {
            client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0] || "",
            client_user_agent: req.headers.get("user-agent") || "",
          },
          ...(custom_data && { custom_data }),
        },
      ],
    };

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${CAPI_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
